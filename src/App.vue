<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: { Nav },
  mounted() {}
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
