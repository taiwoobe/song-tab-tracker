import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import { store } from './store/store'
import VeeValidate from 'vee-validate';
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from './components/shared/sharedPanel'

Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: true })
Vue.use(VeeValidate, {
  events: ''
});

Vue.component('sharedPanel', Panel);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
