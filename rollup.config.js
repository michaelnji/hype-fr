import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
// import dev from "rollup-plugin-dev";
import progress from "rollup-plugin-progress";
import image from "@rollup/plugin-image";
// import notify from "rollup-plugin-notify";
import filesize from "rollup-plugin-filesize";
const { generateSW, injectManifest } = require("rollup-plugin-workbox");
const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  inlineDynamicImports: true,
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    postcss(),
    image(),
    progress({
      clearLine: true, // default: true
    }),
    production && filesize(),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    // css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    production &&
      generateSW({
        swDest: "public/sw.js",
        globDirectory: "public/",
        mode: production ? "production" : "development",
      }),
    production &&
      injectManifest({
        swSrc: "public/sw.js",
        swDest: "public/sw.js",
        globDirectory: "public/",
      }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
