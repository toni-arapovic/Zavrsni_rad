import axios from 'axios'
export default {
    namespaced: true,
    state() {
      return {
        searchValue: "",
        products: [],
      };
    },
    mutations: {
        setSearchValue(state, searchValue){
            state.searchValue = searchValue;
        },
        setProducts(state, products){
            state.products = products;
        }
    },
    actions: {
        async search(context, payload){
          context.commit('setSearchValue', payload);
          var searchResults = {}
          // const products = context.rootGetters['prods/products'];
          const response = await axios.get('http://localhost:3000/products/all')
          const products = response.data

          searchResults = products.filter(product => {
            var title = product.title.toLowerCase().search(payload.toLowerCase())
            var description = product.description.toLowerCase().search(payload.toLowerCase())
            if(title >= 0 || description >= 0){
              return product
            }
          });
          context.commit('setProducts', searchResults)

        },
    },
    getters: {
      products(state) {
        return state.products;
      },
    },
  };