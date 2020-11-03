import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Print from 'vue-print-nb'
import vuetify from './plugins/vuetify';

Vue.use(Print)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    store.dispatch('config_firebase')
  },
}).$mount('#app')
