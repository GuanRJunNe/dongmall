import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //路由级代码拆分
  //这将为此路由生成一个单独的块（about.[hash].js）
  //当访问路由时延迟加载。

]

const router = new VueRouter({
  routes
})

export default router