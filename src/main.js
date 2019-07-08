/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VueResource from "vue-resource"
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import NewsFeed from './components/NewsFeed.vue'
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Header },
    { path: '/Register', component: Register },
    { path: '/Login', component: Login },
    {path: '/NewsFeed', component: NewsFeed}
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
