<template>
  <section class="">
    <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Narudžba uspješna!
    </div>
    <div v-if="errors.length" class="alert alert-danger" role="alert">
      <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form v-on:submit.prevent class="container">
      <div class="form-group">
        <label>Ime i prezime</label>
        <input class="form-control" v-model="name" type="text" required/>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" v-model="email" type="text" required/>
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
    <button @click="validate" class="btn btn-primary mt-2">Završi narudžbu</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import router from "../router.js"
export default {
  data() {
    return {
      name: "",
      email: "",
      adress: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      isSuccessful: false,
      errors: []
    };
  },
  methods: {
    validate(){
      this.errors = []
      if(this.$store.getters["cart/products"].length == 0){
        this.errors.push("Košarica je prazna")
      }
      if(this.name == ""){
        this.errors.push("Unesite ime i prezime")
      }
      if(!this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        this.errors.push("Unesite email")
      }
      if(this.adress == ""){
        this.errors.push("Unesite adresu")
      }
      if(this.city == ""){
        this.errors.push("Unesite grad")
      }
      if(!this.postalCode.match(/^\d{5}$/)){
        this.errors.push("Unesite poštanski broj")
      }
      if(!this.phoneNumber.replace(/\s+/g, '').match(/^\d{9}$/)){
        this.errors.push("Unesite broj telefona")
      }

      if(this.errors.length == 0){
        this.completeOrder();
      }
    },
    completeOrder() {
      var products = this.$store.getters["cart/products"]
      axios
        .post("https://api.zavrsnirad.xyz/orders", {
          products: products,
          name: this.name,
          email: this.email,
          adress: this.adress,
          city: this.city,
          postalCode: this.postalCode,
          phoneNumber: this.phoneNumber,
          totalSum: this.$store.getters["cart/totalSum"]
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.isSuccessful = true;
        setTimeout(() => (this.isSuccessful = false), 2000);
        this.$store.dispatch("cart/clearCart")
        setTimeout(() => (router.push('/')), 2000);
    },
  },
};
</script>
<style scoped>
section{
  margin: 1rem auto 1rem auto;
  width: 60%;
}
</style>