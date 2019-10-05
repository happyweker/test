<template>
  <div id="app">
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/helloworld">hello</router-link></li>
      <li><router-link to="/contact">contact</router-link></li>
    </ul>
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
h1{
  color:purple;
}
ul li{ float: left; margin-right: 15px; list-style:none;}
</style>
