<template>
  <div>
    <index />
    <login />
     <router-view></router-view>
  </div>
</template>

<script>
import login from './views/login.vue'
import index from './views/index.vue'
export default {
  name: 'App',
  components: {
    index,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{
  margin: 0;
  padding: 0;
}
</style>
