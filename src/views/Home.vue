<template>
  <section>
    <h1>Home Page</h1>
    <p>{{ user }}</p>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    user() {
      //Get reactive User Object
      return this.$store.state.auth.user
    }
  }
}
</script>
