<template>
  <section>
    <h1>Signup</h1>

    <button @click="signup" type="button">Signup</button>
    <div>
      <div v-if="error" style="color: red">{{ error }}</div>
      <small>
        Already have an account?
        <span>
          <router-link style="color: dodgerblue" :to="{ name: 'login' }">
            Back to login
          </router-link>
        </span>
      </small>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Signup',
  data() {
    return {
      error: ''
    }
  },
  methods: {
    // Expect login to be asynchronous
    async signup() {
      // console.log('this.$keycloak==>>', this.$keycloak)
      this.$keycloak.register({ redirectUri: window.origin + '/login' })
    },
    setErrors(msg) {
      this.error = msg
      setTimeout(() => {
        this.error = ''
      }, 5000)
    }
  }
}
</script>
