import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4096f669 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _d38a54d8 = () => interopDefault(import('..\\pages\\cryptos\\index.vue' /* webpackChunkName: "pages/cryptos/index" */))
const _882da608 = () => interopDefault(import('..\\pages\\cryptos\\_id.vue' /* webpackChunkName: "pages/cryptos/_id" */))
const _604ed12e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'is-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4096f669,
    name: "about"
  }, {
    path: "/cryptos",
    component: _d38a54d8,
    name: "cryptos"
  }, {
    path: "/cryptos/:id",
    component: _882da608,
    name: "cryptos-id"
  }, {
    path: "/",
    component: _604ed12e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
