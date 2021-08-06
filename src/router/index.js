import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Signup = () => import('../views/Signup.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
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

router.beforeEach(async (to, from, next) => {
  // Check if route requires auth
  const auth = to.matched.some(record => record.meta.auth)

  // Check if user is authenticated vie vuex store
  const authenticated = store.state.auth.authenticated

  if (auth && !authenticated) {
    return next({ name: 'login' })
  }

  // restrict authenticated user from going to nonauthenticated routes
  if (authenticated && !auth) {
    return next(from.path)
  }

  return next()
})

export default router
