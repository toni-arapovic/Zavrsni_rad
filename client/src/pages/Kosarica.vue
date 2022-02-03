<template>
  <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Narudžba uspješna!
  </div>
  <div class="container">
    <table id="cart" class="table table-hover table-condensed">
      <thead>
        <tr>
          <th style="width: 80%">Proizvod</th>
          <th style="width: 5%">Cijena</th>
          <th style="width: 15%">Količina</th>
        </tr>
      </thead>
      <tbody>
        <cart-item
          v-for="item in cartItems"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></cart-item>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="hidden-xs"></td>
          <td class="hidden-xs text-center">
            <strong>Ukupno: {{ cartTotal }} KM</strong>
          </td>
          <td v-if="cartTotal">
            <button @click="order" class="btn btn-primary"
              >Naruci</button
            >
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";
import axios from "axios";
import router from "../router.js"
export default {
  components: {
    CartItem,
  },
  data(){
    return{
      isSuccessful: false
    }
  },
  methods:{
    order(){
      if(this.$store.getters['login/isLogedIn']){
        this.completeOrder()
      }else{
        router.push('/naruci')
      }
    },
    completeOrder() {
      axios
        .post("https://api.zavrsnirad.xyz/orders", {
          products: this.$store.getters["cart/products"],
          name: this.$store.getters['login/user'].name,
          email: this.$store.getters['login/user'].email,
          adress: this.$store.getters['login/user'].adress,
          city: this.$store.getters['login/user'].city,
          postalCode: this.$store.getters['login/user'].postalCode,
          phoneNumber: this.$store.getters['login/user'].phoneNumber,
          username: this.$store.getters['login/user'].username,
          totalSum: this.$store.getters["cart/totalSum"]
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.isSuccessful = true;
        setTimeout(() => (this.isSuccessful = false), 2000);
        this.$store.dispatch("cart/clearCart")
        setTimeout(() => (router.push('/')), 2000);
    },
  },
  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
    cartItems() {
      return this.$store.getters["cart/products"];
    },
  },
};
</script>