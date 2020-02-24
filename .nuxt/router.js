import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _051ec38e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _4ce76bde = () => import('../pages/frameworks.vue' /* webpackChunkName: "pages/frameworks" */).then(m => m.default || m)
const _4b776daa = () => import('../pages/programmingLanguages.vue' /* webpackChunkName: "pages/programmingLanguages" */).then(m => m.default || m)
const _47c29760 = () => import('../pages/framework/_slug.vue' /* webpackChunkName: "pages/framework-slug" */).then(m => m.default || m)
const _564d0233 = () => import('../pages/programmingLanguage/_slug.vue' /* webpackChunkName: "pages/programmingLanguage-slug" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _051ec38e,
			name: "index"
		},
		{
			path: "/frameworks",
			component: _4ce76bde,
			name: "frameworks"
		},
		{
			path: "/programmingLanguages",
			component: _4b776daa,
			name: "programmingLanguages"
		},
		{
			path: "/framework/:slug?",
			component: _47c29760,
			name: "framework-slug"
		},
		{
			path: "/programmingLanguage/:slug?",
			component: _564d0233,
			name: "programmingLanguage-slug"
		}
    ],
    fallback: false
  })
}
