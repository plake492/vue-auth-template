<template>
  <nav>
    <h1>TITLE</h1>
    <div>
      <ul v-if="authenticated">
        <a @click="logout">Logout</a>
      </ul>
      <ul v-else>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    authenticated() {
      return this.$store.state.auth.authenticated
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
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
</style>
