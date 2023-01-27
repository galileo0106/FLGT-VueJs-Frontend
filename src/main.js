import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import '@fortawesome/fontawesome-free/js/all'

const i18n = createI18n();
  
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(VueAxios, axios);
app.mount('#app');