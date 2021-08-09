import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Signup = () => import('../views/Signup.vue')
const AuthPage = () => import('../views/AuthPage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { auth: true }
  },
  {
    path: '/auth-page',
    name: 'auth-page',
    component: AuthPage,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: { auth: false }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/** KEYCLOAK ROUTE GAURDS */
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.auth)
  let isAuthenticated
  if (requiresAuth) {
    // We wait for Keycloak init, then we can call all methods safely
    while (router.app.$keycloak.createLoginUrl === null) {
      await sleep(100)
    }
    isAuthenticated = router.app.$keycloak.authenticated
    if (isAuthenticated && requiresAuth) {
      next()
    } else {
      const loginUrl = router.app.$keycloak.createLoginUrl()
      window.location.replace(loginUrl)
    }
  } else {
    // force router to wait for keycloak auth to load.
    // This will verify that an authenticaed user
    // cannot access non auth routes.
    while (router.app.$keycloak.createLoginUrl === null) {
      await sleep(100)
    }
    isAuthenticated = router.app.$keycloak.authenticated

    if (isAuthenticated && !requiresAuth) {
      return next(from.path || '/home')
    }
    next()
  }
})
/*************************/

export default router
