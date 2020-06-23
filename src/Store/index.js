// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


// -> require lodash
window._ = require('lodash');

// -> import vue
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// -> import helpers
import { rename } from '../Helpers/Misc';

const STORAGE = new VuexPersistence({
  storage: window.localStorage
});

const MODULES = {};

const DEBUG = process.env.NOVE_ENV !== 'production';

const FILES = require.context('../Models/', true, /\.js$/i);
FILES.keys().map(key => {
  const name = key.split('/').pop().split('.')[0];
  MODULES[name] = FILES(key).default;
});

const vuexStore = new Vuex.Store({
  modules: MODULES,
  strict: DEBUG,
  plugins: [STORAGE.plugin]
});


_.store = vuexStore;
_.model = function (model) {
  model = rename(model, 'Model');
  return _.store.state[model];
};


export default vuexStore;