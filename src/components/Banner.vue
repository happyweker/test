<template>
  <div class="banner">
    <h1>{{bannerText}}</h1>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      bannerText:"this a banner!"
    }
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	background: green;
	padding: 20px;
}
h1{
	color:red;
	text-align: center;
}
</style>
