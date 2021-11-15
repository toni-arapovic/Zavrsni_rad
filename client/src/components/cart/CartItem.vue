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
        <button  class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Ukloni</button>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ukloni proizvod</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Jeste li sigurni da želite ukloniti proizvod?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Odustani</button>
            <button @click="remove" type="button" class="btn btn-danger" data-bs-dismiss="modal">Ukloni</button>
          </div>
        </div>
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