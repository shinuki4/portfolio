import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import vuetify from './plugins/vuetify';
import VueTyperPlugin from './plugins/vue-typer';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  vuetify,
  VueTyperPlugin,
  render: h => h(App)
}).$mount('#app')
