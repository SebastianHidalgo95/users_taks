require('./bootstrap');

import { createApp } from 'vue'
import axios from 'axios'

import App from "./vue/App.vue"
import router from './vue/router'
import store from "./vue/store"  
import Toast from "vue-toastification"  //Libreria para Alertas
import "vue-toastification/dist/index.css";

//Configuracin AXIOS
//base.url debe ser definida segun el servidor local a usar
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/api'

//Intenta ver si hay alguna token en localstorage
const token = localStorage.getItem('token')

if ( token ) {
    //En caso de token el header se asigna a la token guardada
    axios.defaults.headers.common['Authorization'] = token
}
//Manejo de errores y excepciones con AXIOS
//En caso de token expired logout
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



