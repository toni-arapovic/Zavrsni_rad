import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
  actions: {
    async getProducts({ commit }){
      const response = await axios.get('http://localhost:3000/products')
      commit('setProducts', response.data)
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
