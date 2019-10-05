// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// 引入HelloWorld
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Contact from './components/Contact'

// 引入全部组件
// import Users from './components/Users'

Vue.config.productionTip = false
// 使用当前路由
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
	routes:[
	{path:"/",component:Home},
	{path:"/helloworld",component:HelloWorld},
	{path:"/contact",component:Contact}
	],
	mode:"history"
})

// 全局注册组件
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  //注册组件，还原：components:{ "App":App}
  components: { App },
  // 写入/使用，还原：template:'<App></App>'
  template: '<App/>'
})
													