<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Logo</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
         <router-link class="nav-link" to="/processori">Processori</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/maticneploce">Maticne ploce</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/ram">Ram</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/pohranapodataka">HDD i SSD</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/grafickekartice">Graficke kartice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/kucista">Kucista</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/napojnejedinice">Napojne jedinice</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/ventilatorikuleri">Ventilatori i kuleri</router-link>
        </li>
      </ul>
      <ul class="navbar-nav me-left">
        <li class="nav-item">
          <router-link class="nav-link" to="/kosarica">🛒</router-link>
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
  }
}
</script>