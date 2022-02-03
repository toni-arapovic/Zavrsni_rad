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
         <router-link class="nav-link text-white" to="/processor">Processori</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/maticnaploca">Maticne ploce</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/ram">Ram</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/pohranapodataka">HDD i SSD</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/grafickakartica">Graficke kartice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/kuciste">Kucista</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/napojnajedinica">Napojne jedinice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link text-white" to="/ventilatorkuler">Ventilatori i kuleri</router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-left">
        <li class="nav-item">
          <router-link class="nav-link" to="/kosarica">🛒<div class="circle-number">{{ cartQuantity }}</div></router-link>
        </li>

      </ul>
      <form v-if="currentRouteName != '/trazi'" v-on:submit.prevent class="d-flex">
        <input v-model="searchValue" class="form-control me-2" type="text" placeholder="Traži">
        <router-link to="/trazi" @click="setSearchValue" class="btn btn-primary" type="button">Traži</router-link>
      </form>
      <ul class="navbar-nav me-left">
        <li v-if="!logInStatus" class="nav-item">
          <router-link class="btn btn-primary" to="/login">Log in</router-link>
        </li>
        <li v-else class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{{ username }}</a>
            <ul class="dropdown-menu dropdown-menu-end">
              <router-link class="dropdown-item" to="/korisnik">Podaci o korisniku</router-link>
              <router-link class="dropdown-item" to="/korisniknarudzbe">Povijest narudžbi</router-link>
              <li><router-link to="/" @click="logOut" class="dropdown-item">Log out</router-link></li>
            </ul>
          </li>

      </ul>
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
      this.searchValue = ""
    },
    logOut(){
      this.$store.dispatch("login/logOut")
    },
  },
  computed:{
    cartQuantity(){
      return this.$store.getters['cart/quantity'];
    },
    logInStatus(){
      return this.$store.getters['login/isLogedIn']
    },
    username(){
      return this.$store.getters['login/user'].username
    },
    currentRouteName() {
        console.log(this.$route.path)
        return this.$route.path;
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
  .btn{
    margin: 2px;
  }
</style>