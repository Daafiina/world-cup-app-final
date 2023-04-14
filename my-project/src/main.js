import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import './firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@mdi/font/css/materialdesignicons.css'
// import 'bulma/css/bulma.css'

createApp(App).use(store).use(router).mount('#app')
