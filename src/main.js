import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'

Vue.config.productionTip = false

Vue.use(VueKeycloakJs, {
  init: {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
  },
  config: {
    url: 'http://localhost:8080/auth',
    clientId: 'vue-app',
    realm: 'vue-app-auth-test'
  },
  logout: {
    redirectUri: window.origin + '/login'
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
