import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.css';

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  duration: 3000,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
