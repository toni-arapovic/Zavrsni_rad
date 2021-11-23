<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Web shop</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
         <router-link class="nav-link" to="/processor">Processori</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/maticnaploca">Maticne ploce</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/ram">Ram</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/pohranapodataka">HDD i SSD</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/grafickakartica">Graficke kartice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/kuciste">Kucista</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/napojnajedinica">Napojne jedinice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/ventilatorkuler">Ventilatori i kuleri</router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-left">
        <li class="nav-item">
          <router-link class="nav-link" to="/kosarica">🛒<div class="circle-number">{{ cartQuantity }}</div></router-link>
        </li>

      </ul>
      <form v-on:submit.prevent class="d-flex">
        <input v-model="searchValue" class="form-control me-2" type="text" placeholder="Traži">
        <router-link to="/trazi" @click="setSearchValue" class="btn btn-primary" type="button">Traži</router-link>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data(){
    return{
      searchValue: "",
    }
  },
  methods:{
    setSearchValue(){
      this.$store.dispatch("search/search", this.searchValue)
    }
  },
  computed:{
    cartQuantity(){
      return this.$store.getters['cart/quantity'];
    }
  }
}
</script>

<style scoped>
  .circle-number {
    background: red;
    border-radius: 0.8em;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    line-height: 1.2em;
    margin-right: 5px;
    text-align: center;
    width: 1.2em; 
  }
</style>