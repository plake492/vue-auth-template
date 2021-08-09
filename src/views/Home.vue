<template>
  <section>
    <aside>
      <router-link :to="{ name: 'auth-page' }">Other Auth Page</router-link>
    </aside>
    <h1>Home Page</h1>
    <p>token: {{ token }}</p>
    <p>Is Authenticated: {{ authenticated }}</p>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    token() {
      //Get reactive User Object
      return this.$keycloak.token
    },
    authenticated() {
      //Get Auth status for route guard
      return this.$keycloak.authenticated
    }
  },
  mounted() {
    // Router guard to kick out none authenticated users
    if (!this.authenticated) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
a {
  color: black !important;
}
</style>
