import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import Home from "./components/home.vue";

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})*/
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})*/

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true
/*
const routes = [
      { path:'/home', component: App }
]
*/
const router = new VueRouter({
  history: true,
  hashbang: false
  //routes
})


/*
new Vue({
  el: 'body',
  router ,
  components: { App }
})*/

// 路由map

router.map({
  '/home': {
    title: '首页',
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  }
})

router.afterEach(function (transition) {
    if (transition.to.title) {
        document.title = transition.to.title;
    }
});

router.redirect({
  '/index': '/home'
})

router.start(App, '#app')
