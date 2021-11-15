<template>
  <li class="card">
    <div div class="card-body">
      <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Proizvod dodan u košaricu
      </div>
      <div>
        <img class="card-img" :src="image" :alt="title"/>
      </div>
      <div>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="buy d-flex justify-content-between align-items-center">
      <h5  class="price text-success">{{ price }}KM</h5>
      <button @click="addToCart" class="btn btn-primary">Dodaj u kosaricu</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  data(){
    return{
      isSuccessful: false
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
      });
      this.isSuccessful = true;
      setTimeout(() => this.isSuccessful = false, 2000);
    },
  },
};
</script>

<style scoped>
.card-img{
  display: block;
  height: 240px;
  width: auto;
  margin-left: auto;
  margin-right: auto
}
</style>