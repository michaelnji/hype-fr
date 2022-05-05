
/**
 * @roxi/routify 2.18.5
 * File generated Thu May 05 2022 11:49:29 GMT+0100 (heure normale d’Afrique de l’Ouest)
 */

export const __version = "2.18.5"
export const __timestamp = "2022-05-05T10:49:29.733Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
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
      "isFile": false,
      "isDir": true,
      "file": "welcome",
      "filepath": "/welcome",
      "name": "welcome",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "blog",
          "filepath": "/welcome/blog",
          "name": "blog",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/blog",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[id].svelte",
              "filepath": "/welcome/blog/[id].svelte",
              "name": "[id]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/blog/[id].svelte",
              "importPath": "../src/pages/welcome/blog/[id].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
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
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/welcome/blog/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/blog/index.svelte",
              "importPath": "../src/pages/welcome/blog/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
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
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/blog"
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "contact",
          "filepath": "/welcome/contact",
          "name": "contact",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/contact",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/welcome/contact/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/contact/index.svelte",
              "importPath": "../src/pages/welcome/contact/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
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
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/contact"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/welcome/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/index.svelte",
          "importPath": "../src/pages/welcome/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
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
          "isFile": false,
          "isDir": true,
          "file": "login",
          "filepath": "/welcome/login",
          "name": "login",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/login",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/welcome/login/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/login/index.svelte",
              "importPath": "../src/pages/welcome/login/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
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
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/login"
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "signup",
          "filepath": "/welcome/signup",
          "name": "signup",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/signup",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/welcome/signup/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/Michael/Desktop/hype-fr/src/pages/welcome/signup/index.svelte",
              "importPath": "../src/pages/welcome/signup/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
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
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/welcome/signup"
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/welcome"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
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

