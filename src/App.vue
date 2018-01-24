<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import urlsend from './components/urlsend'
export default {
  name: 'app',
  components: {
    urlsend
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
