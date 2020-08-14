window._ = require('lodash');

import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import Settings, { ANONYMOUS, INTERACTIONS } from './config/Settings';
import { _CONTROLLER } from './bootstrap';

import './assets/scss/app.scss';

Vue.config.productionTip = false;

_.controller = _CONTROLLER;
_.controllers = [];

const files = require.context('./controllers/', true, /\.js$/i);
files.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
});

if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}

// mock
// import './mock/index';

new Vue({
	router: Router,
	store: Store,
	render: (h) => h(App)
}).$mount('#app');
