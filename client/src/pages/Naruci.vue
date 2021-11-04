<template>
  <section>
    <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Narudžba uspješna!
    </div>
    <form v-on:submit.prevent class="container">
      <div class="form-group">
        <label>Ime i prezime</label>
        <input class="form-control" v-model="name" type="text" required/>
      </div>
      <div class="form-group">
        <label>Adresa</label>
        <input class="form-control" v-model="adress" type="text" required/>
      </div>
      <div class="form-group">
        <label>Grad</label>
        <input class="form-control" v-model="city" type="text" required/>
      </div>
      <div class="form-group">
        <label>Poštanski broj</label>
        <input class="form-control" v-model="postalCode" type="text" required/>
      </div>
      <div class="form-group">
        <label>Broj telefona</label>
        <input class="form-control" v-model="phoneNumber" type="text" required/>
      </div>
    <button @click="completeOrder" class="btn btn-primary mt-2">Završi narudžbu</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      adress: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      isSuccessful: false
    };
  },
  methods: {
    completeOrder() {
      var products = this.$store.getters["cart/products"]
      axios
        .post("http://localhost:3000/orders", {
          products: products,
          name: this.name,
          adress: this.adress,
          city: this.city,
          postalCode: this.postalCode,
          phoneNumber: this.phoneNumber,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.isSuccessful = true;
    },
  },
};
</script>
