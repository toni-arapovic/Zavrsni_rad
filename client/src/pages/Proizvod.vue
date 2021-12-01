<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div v-if="isSuccessful" class="alert alert-success" role="alert">
          Proizvod dodan u košaricu
        </div>
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-6">
            <div class="white-box text-center">
              <img :src="products.image" :alt="products.title" class="img-responsive"/>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-6">
            <h3 class="card-title">{{ products.title }}</h3>
            <h4 class="box-title mt-5">Opis proizvoda</h4>
            <p>{{ products.description }}</p>
            <h2 class="mt-5">{{ products.price }} KM</h2>
            <button @click="addToCart" class="btn btn-primary">
              Dodaj u kosaricu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isSuccessful: false,
      products: [],
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", {
        id: this.$route.params.prId,
      });
      this.isSuccessful = true;
      setTimeout(() => (this.isSuccessful = false), 2000);
    },
    async loadData() {
      const response = await axios.get(
        "http://localhost:3000/products/" + this.$route.params.prId
      );
      this.products = response.data;
      console.log(this.products);
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
img {
  height: 400px;
}
</style>
