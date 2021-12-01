<template>
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
          <td>
            <router-link to="/naruci" class="btn btn-primary" type="button"
              >Naruci</router-link
            >
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";

export default {
  components: {
    CartItem,
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