<template>
  <div >
    <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Proizvod dodan u košaricu
    </div>
    <div>
      <img :src="products.image" :alt="products.title" />
    </div>
    <div>
      <h4>{{ products.title }}</h4>
      <p>{{ products.description }}</p>
    </div>
    <div>
      <h5>{{ products.price }}KM</h5>
      <button @click="addToCart" class="btn btn-primary">
        Dodaj u kosaricu
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    async loadData(){
    const response = await axios.get('http://localhost:3000/products/'+this.$route.params.prId)
    this.products = response.data;
    console.log(this.products)
    }
  },
  created(){
    this.loadData();
  },
};
</script>
