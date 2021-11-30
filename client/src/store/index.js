import { createStore } from 'vuex';

import cartModule from './modules/cart.js';
import searchModule from './modules/search.js'

const store = createStore({
  modules: {
    cart: cartModule,
    search: searchModule
  }
});

export default store;