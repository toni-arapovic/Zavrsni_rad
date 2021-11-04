import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';
import searchModule from './modules/search.js'

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
    search: searchModule
  }
});

export default store;