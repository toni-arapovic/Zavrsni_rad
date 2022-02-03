import { createStore } from 'vuex';

import cartModule from './modules/cart.js';
import searchModule from './modules/search.js'
import loginModule from './modules/login.js'

const store = createStore({
  modules: {
    cart: cartModule,
    search: searchModule,
    login: loginModule
  }
});

export default store;