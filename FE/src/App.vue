<template>
  <div id="myapp">
  <router-view></router-view>
  </div>
   <!--
    <div id="mydiv">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
    </div>
  </div>-->
   
</template>

<script>
import Hello from './components/Hello'
import Home from './components/Home'
import Store from './vuex/store'

export default {
  components: {
      Hello,
      Home
    },
    store: Store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
