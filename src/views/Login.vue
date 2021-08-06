<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label>email</label>
        <input type="email" v-model="user.email" />
      </div>
      <div>
        <label>password</label>
        <input type="password" v-model="user.password" />
      </div>
      <button type="submit">Login</button>
    </form>
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
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    // Expect login to be asynchronous
    async login() {
      try {
        await this.$store.dispatch('auth/login', { user: this.user })
        this.$router.push({ name: 'home' })
      } catch (err) {
        //Set error message
        this.error = err.message
      }
    }
  }
}
</script>
