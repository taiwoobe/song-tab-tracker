import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import { store } from './store/store'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  events: ''
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
