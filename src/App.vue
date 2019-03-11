<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <list name="testname"></list>
    <site-footer></site-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import List from "./components/list";
import SiteFooter from "./containers/site-footer";
export default {
  name: "app",
  components: {
    HelloWorld,
    List,
    SiteFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
