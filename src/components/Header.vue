<template>
  <header v-on:click="ChangeTitle">
    <h1>{{title1}} {{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
  	title:{
  		type:String
  	}

  },
  data () {
    return {
      title1:"Vue.js Demo"
    }
  },
  methods:{
  	ChangeTitle:function(){
  		// this.title="我改变了";
  		// 注册事件：$emit("所绑定的事件名"，"所要传的值")
  		this.$emit("titleChanged","子组件向父组件传值");
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background: lightgreen;
	padding: 10px;
}
h1{
	color:#222;
	text-align: center;
}
</style>
