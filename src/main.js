import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = "http://127.0.0.1";
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
