export default {
    namespaced: true,
    state() {
      return {
        searchValue: "",
      };
    },
    mutations: {
        setSearchValue(state, searchValue){
            state.searchValue = searchValue;
        },
    },
    actions: {
        async search(context, payload){
          context.commit('setSearchValue', payload)
        },
    },
    getters: {

      searchValue(state) {
        return state.searchValue;
      },
    },
  };