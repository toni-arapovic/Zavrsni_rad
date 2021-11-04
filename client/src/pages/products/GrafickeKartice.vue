<template>
  <section >
    <ul class="row">
      <product-item class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="prod in products"
        :key="prod._id"
        :id="prod._id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../../components/products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"].filter((product) => {
        return product.type == "grafickakartica";
      });
    },
  },
};
</script>