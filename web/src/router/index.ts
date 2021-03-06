import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import RegisterComponent from "../views/register.vue"
import HomeComponent from "../views/home.vue"
import OrderComponent from "../views/orders.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/register",
      name: "register",
      component: RegisterComponent
    },
    {
      path: "/home",
      name: "home",
      component: HomeComponent
    },
    {
      path: "/order",
      name: "orders",
      component: OrderComponent
    },
  ]
})