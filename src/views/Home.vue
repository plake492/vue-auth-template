<template>
  <section>
    <h1>Home Page</h1>
    <p>Email: {{ user }}</p>
    <p>Is Authenticated: {{ authenticated }}</p>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    user() {
      //Get reactive User Object
      return this.$store.state.auth.user.email
    },
    authenticated() {
      //Get Auth status for route guard
      return this.$store.state.auth.authenticated
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
