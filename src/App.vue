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
  cursor: pointer;
}

section {
  padding: 2rem;
}

button {
  border-radius: 0;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: black;
  color: white;
  border: 1px black solid;
  cursor: pointer;
}

label {
  display: block;
  text-transform: capitalize;
}
</style>
