<template>
  <li class="card">
    <div div class="card-body">
      <div>
        <img class="card-img" :src="image"/>
      </div>
      <div>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">Kolicina {{ qty }}</p>
      </div>
      <div class="buy d-flex justify-content-between align-items-center">
      <h5  class="price text-success">Cijena {{ price }}KM</h5>
      <button @click="remove" class="btn btn-danger">Ukloni</button>
      </div>
    </div>
  </li>
</template>


<script>
export default {
  props: ['prodId', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.price * this.qty);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
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