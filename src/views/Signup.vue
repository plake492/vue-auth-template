<template>
  <section>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <div>
        <label>first name</label>
        <input type="text" v-model="user.firstName" />
      </div>
      <div>
        <label>last name</label>
        <input type="text" v-model="user.lastName" />
      </div>
      <div>
        <label>email</label>
        <input type="email" v-model="user.email" />
      </div>
      <div>
        <label>password</label>
        <input type="password" v-model="user.password" />
      </div>
      <div>
        <label>confirm password</label>
        <input type="password" v-model="user.confirmPassword" />
      </div>
      <button type="submit">Signup</button>
    </form>
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
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: ''
    }
  },
  methods: {
    // Expect login to be asynchronous
    async signup() {
      try {
        if (this.user.password === this.user.confirmPassword) {
          // Use destructuring to remove confirmPassword property
          const { confirmPassword, ...user /* user object */ } = this.user

          await this.$store.dispatch('auth/signup', { user })

          this.$router.push({ name: 'login', query: { email: user.email } })
        } else {
          this.setErrors('Passwords do not match')
        }
      } catch (err) {
        //Set error message
        this.error = err.message
      }
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
