<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <h1>TITLE</h1>
    </router-link>
    <div v-if="userName" style="text-align: center">
      <h4>loggin in as: {{ userName }}</h4>
      <h5>{{ fullName }}</h5>
    </div>
    <li>
      <ul v-if="authenticated">
        <a @click="logout">Logout</a>
      </ul>
      <ul v-else>
        <a @click="login">Login</a>
      </ul>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    authenticated() {
      return this.$keycloak.authenticated
    },
    userName() {
      return this.$keycloak.userName || null
    },
    fullName() {
      return this.$keycloak.fullName || null
    }
  },
  methods: {
    async logout() {
      await this.$keycloak.logoutFn()
    },
    async login() {
      await this.$keycloak.loginFn({ redirectUri: window.origin + '/home' })
    }
  }
}
</script>

<style>
nav {
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
  min-height: 150px;
}

li,
a {
  color: white !important;
}
</style>
