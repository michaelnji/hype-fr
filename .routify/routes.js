
/**
 * @roxi/routify 2.18.5
 * File generated Thu May 05 2022 17:45:54 GMT+0100 (heure normale d’Afrique de l’Ouest)
 */

export const __version = "2.18.5"
export const __timestamp = "2022-05-05T16:45:54.627Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "children": [
    {
      "isFallback": true,
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/blog/:id",
              "id": "_welcome_blog__id",
              "component": () => import('../src/pages/welcome/blog/[id].svelte').then(m => m.default)
            },
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/blog/index",
              "id": "_welcome_blog_index",
              "component": () => import('../src/pages/welcome/blog/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/blog"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/boosts/index",
              "id": "_welcome_boosts_index",
              "component": () => import('../src/pages/welcome/boosts/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/boosts"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/contact/index",
              "id": "_welcome_contact_index",
              "component": () => import('../src/pages/welcome/contact/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/contact"
        },
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/index",
          "id": "_welcome_index",
          "component": () => import('../src/pages/welcome/index.svelte').then(m => m.default)
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/login/index",
              "id": "_welcome_login_index",
              "component": () => import('../src/pages/welcome/login/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/login"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/plans/index",
              "id": "_welcome_plans_index",
              "component": () => import('../src/pages/welcome/plans/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/plans"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/reseller/index",
              "id": "_welcome_reseller_index",
              "component": () => import('../src/pages/welcome/reseller/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/reseller"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/welcome/signup/index",
              "id": "_welcome_signup_index",
              "component": () => import('../src/pages/welcome/signup/index.svelte').then(m => m.default)
            }
          ],
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/signup"
        }
      ],
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/welcome"
    }
  ],
  "isLayout": true,
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

