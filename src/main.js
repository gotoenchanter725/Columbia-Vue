import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import { createPinia } from 'pinia'

import './assets/scss/main.scss'
import "vue-awesome-paginate/dist/style.css";

createApp(App)
.use(VueAwesomePaginate)
.use(router)
.use(createPinia())
.mount('#app')