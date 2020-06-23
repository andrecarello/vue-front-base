window._ = require('lodash');

import Vue from 'vue'
import App from './App.vue'
import Router from './Router'
import Store from './Store'
import Settings, {ANONYMOUS, INTERACTIONS} from "./Settings";

Vue.config.productionTip = false;

if ( !localStorage.getItem(ANONYMOUS) ) { Settings.anonymous() }
if ( INTERACTIONS ) { Settings.interactions() }

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
