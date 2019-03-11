import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

// main.styl

Vue.use(Vuetify, {
  iconfont: 'fa',
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
