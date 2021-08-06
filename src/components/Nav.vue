<template>
  <nav>
    <h1>TITLE</h1>
    <div>
      <ul>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
nav {
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
  min-height: 150px;
}
</style>
