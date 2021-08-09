<template>
  <section>
    <h1>Login</h1>
    <button @click="login" type="button">Login</button>
    <div>
      <small>
        Don't have an account?
        <span>
          <router-link style="color: dodgerblue" :to="{ name: 'signup' }">
            Creat one here
          </router-link>
        </span>
      </small>
    </div>
    <div v-if="error" style="color: red">{{ error }}</div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      error: ''
    }
  },
  methods: {
    // Expect login to be asynchronous
    async login() {
      this.$keycloak.loginFn({ redirectUri: window.origin + '/home' })
    },
    setErrors(msg) {
      this.error = msg
      setTimeout(() => {
        this.error = ''
      }, 5000)
    }
  },
  mounted() {}
}
</script>
