<template>
  <li class="card">
    <div div class="card-body">
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
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
      });
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