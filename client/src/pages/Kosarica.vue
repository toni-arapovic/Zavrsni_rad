<template>
  <section>
    <h3>Ukupno: {{ cartTotal }}KM</h3>
    <router-link to="/naruci" class="btn btn-primary" type="button">Naruci</router-link>
    <ul class="row">
      <cart-item class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    }
  }
};
</script>