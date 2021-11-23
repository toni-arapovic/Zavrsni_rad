import axios from 'axios'
export default {
    namespaced: true,
    state() {
      return {
        items: [],
        total: 0,
        qty: 0
      };
    },
    mutations: {
      addProductToCart(state, payload) {
        const productData = payload;
        const productInCartIndex = state.items.findIndex(
          (ci) => ci.productId === productData._id
        );
  
        if (productInCartIndex >= 0) {
          state.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: productData._id,
            title: productData.title,
            image: productData.image,
            price: productData.price,
            qty: 1,
          };
          state.items.push(newItem);
        }
        state.qty++;
        state.total += productData.price;
      },
      removeProductFromCart(state, payload) {
        const prodId = payload.productId;
        const productInCartIndex = state.items.findIndex(
          (cartItem) => cartItem.productId === prodId
        );
        const prodData = state.items[productInCartIndex];
        state.items.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.price * prodData.qty;
      },
      clearProductsFromCart(state){
        state.items = [],
        state.total = 0,
        state.qty = 0
      }
    },
    actions: {
      async addToCart(context, payload) {
        const prodId = payload.id;
        // const products = context.rootGetters['prods/products'];
        // const product = products.find(prod => prod._id === prodId);
        const response = await axios.get('http://localhost:3000/products/'+prodId)
        const product = response.data
        context.commit('addProductToCart', product);
      },
      removeFromCart(context, payload) {
        context.commit('removeProductFromCart', payload);
      },
      clearCart(context){
        context.commit('clearProductsFromCart')
      }
    },
    getters: {
      products(state) {
        return state.items;
      },
      totalSum(state) {
        return state.total;
      },
      quantity(state) {
        return state.qty;
      }
    }
  };
  