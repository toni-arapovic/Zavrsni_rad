export default{
    namespaced: true,
    state(){
        return{
            user: {},
            isLogedIn: false
        }
    },
    mutations:{
        addUserToState(state, user){
            state.user = user
            state.isLogedIn = true
        },
        updateOrdersinState(state, orders){
            state.user.orders = orders
        },
        removeUserFromState(state){
            state.user = {}
            state.isLogedIn = false
        }
    },
    actions:{
        logIn(context, payload){
            context.commit("addUserToState", payload)
        },
        updateOrders(context, payload){
            context.commit("updateOrdersinState", payload)
        },
        logOut(context){
            context.commit("removeUserFromState")
        }
    },
    getters:{
        user(state){
            return state.user;
        },
        isLogedIn(state){
            return state.isLogedIn;
        }
    }
}