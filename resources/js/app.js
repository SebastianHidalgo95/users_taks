require('./bootstrap');

import { createApp } from 'vue'
import axios from 'axios'

import App from "./vue/App.vue"
import router from './vue/router'
import store from "./vue/store"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/api'
const token = localStorage.getItem('token')

if ( token ) {
    axios.defaults.headers.common['Authorization'] = token
}
axios.interceptors.response.use(undefined, function (error) {
    console.log('Error from http request')
    if (error) {
        const originalRequest = error.config;
         if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          store.dispatch('logout')
          
          return router.push('/login')
        }
        else {
            store.commit('handle_error',JSON.parse(error.response.data.error));
        }
    }
})
  

const app = createApp(App)
app.use(store)
app.use(Toast)
app.use(router)
app.mount('#app')



