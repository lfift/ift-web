import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Development from '../components/Development'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Development',
      component: Development
    }
  ],
  mode: 'history'
})
