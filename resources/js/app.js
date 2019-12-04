/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArgonDashboard from './plugins/argon-dashboard'
Vue.use(ArgonDashboard)

import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'
Vue.router = router

Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://class.h2omelon.id/api`
// axios.defaults.baseURL = `http://localhost:8000/api` // to prevent cors on localhost
Vue.use(VueAuth, auth)

// const app = new Vue({
//     el: '#app',
//     components: { App },
//     router
// });

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')