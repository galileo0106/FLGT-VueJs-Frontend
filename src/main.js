import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createStore } from 'vuex';
import Vue3CountryIntl from 'vue3-country-intl';
import 'vue3-country-intl/lib/vue3-country-intl.css'
import '@fortawesome/fontawesome-free/js/all'

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
  

const i18n = createI18n();
  
const app = createApp(App);
app.component(Vue3CountryIntl.name, Vue3CountryIntl);
app.use(router);
app.use(i18n);
app.use(VueAxios, axios);
app.use(store);
app.mount('#app');