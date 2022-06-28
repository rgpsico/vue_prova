import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {URL_API} from './configs/api'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
axios.defaults.baseURL = URL_API

createApp(App).use(router).mount('#app')
