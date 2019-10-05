<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="us"></users>
    <banner></banner>
    <users v-bind:users="us"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

// 局部注册组件(导入)
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner.vue'

export default {
  name: 'home',
  data(){
    return {
      us:[
      // {name:"Henry",position:"Web开发",show:false},
      // {name:"Bucky",position:"Web开发",show:false},
      // {name:"Henry",position:"Web开发",show:false},
      // {name:"Bucky",position:"Web开发",show:false},
      // {name:"Henry",position:"Web开发",show:false},
      // {name:"Bucky",position:"Web开发",show:false},
      // {name:"Henry",position:"Web开发",show:false},
      // {name:"Bucky",position:"Web开发",show:false},
      // {name:"Emily",position:"Web开发",show:false}
      ],
      title:"传递一个值,(string,number,boolean)"
    }
  },
  methods:{
      updateTitle:function(title){
        this.title = title;
      }
  },
  // 声明局部组件
  components:{
    // 可以省略为Users正常运行
    //Users
      "users":Users,

      "app-header":Header,
      "app-footer":Footer,
      "banner":Banner
  },
  created:function(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
    .then((data) =>{
      // console.log(data);
      this.us = data.body;
    })
  }
}
</script>

<style scoped>
h1{
  color:purple;
}
#home{clear: both;}
</style>
