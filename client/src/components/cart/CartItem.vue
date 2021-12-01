<template>
  <tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-2 hidden-xs">
          <img :src="image" :alt="title" class="img-responsive" />
        </div>
        <div class="col-sm-10">
          <h4 class="nomargin">{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
      </div>
    </td>
    <td data-th="Price">{{ price }}</td>
    <td data-th="Quantity">
      <button class="btn btn-primary" v-if="qty>1" @click="decrease">-</button>
      {{ qty }}
      <button class="btn btn-primary" @click="increase">+</button>
    </td>
    <td class="actions" data-th="">
      <button
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ukloni
      </button>
    </td>
    <td>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ukloni proizvod
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Jeste li sigurni da želite ukloniti proizvod?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Odustani
              </button>
              <button
                @click="remove"
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Ukloni
              </button>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>


<script>
export default {
  props: ["prodId", "title", "image", "description", "price", "qty"],
  computed: {
    itemTotal() {
      return this.price * this.qty;
    },
  },
  methods: {
    remove() {
      this.$store.dispatch("cart/removeFromCart", { productId: this.prodId });
    },
    increase(){
      this.$store.dispatch("cart/increase", { productId: this.prodId })
    },
    decrease(){
      this.$store.dispatch("cart/decrease", { productId: this.prodId })
    }
  },
};
</script>

<style scoped>
img {
  display: block;
  height: 120px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>