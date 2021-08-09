<template>
  <section>
    <aside>
      <router-link :to="{ name: 'home' }">home</router-link>
    </aside>
    <h1>OTHER SECRET PAGE</h1>
    <button @click="sendReq">
      Send Test Request with keycloak token in headers
    </button>
  </section>
</template>

<script>
import { sendReq } from '@/utils/api'
export default {
  methods: {
    async sendReq() {
      const res = await sendReq()
      console.log('res==>>', res)
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
