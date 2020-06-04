import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './../components/Login.vue'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Users from './../components/user/Users.vue'
import Rights from './../components/power/Rights.vue'
import Roles from './../components/power/Roles.vue'
import Cate from './../components/goods/Cate.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' }, //访问'/'的时候重定向到'/login'
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{ path: '/welcome', component: Welcome },
    { path: '/users', component: Users },
    { path: '/rights', component: Rights},
    { path: '/roles', component: Roles},
    { path: '/categories', component: Cate}
    ]
  }
]

const router = new VueRouter({
  routes
})

//挂载一个路由导航守卫(注意这个要在定义routers实例化之后)
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从那个路径跳转而来
  //next 是一个函数，表示放行
  //next() 放行  next('/login') 强制跳转
  if (to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
