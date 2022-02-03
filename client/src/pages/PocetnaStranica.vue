<template>
  <section class="landingPage">
  </section>
  <section class="conatiner">
    <h1>Popularni proizvodi</h1>
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#popularNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="popularNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('')">Svi proizvodi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('processor')">Processori</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('maticnaploca')">Maticne ploce</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('ram')">Ram</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('pohranapodataka')">HDD i SSD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('grafickakartica')">Graficke kartice</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('kuciste')">Kucista</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('napojnajedinica')">Napojne jedinice</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click="setTypeValue('ventilatorkuler')">Ventilatori i kuleri</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="row">
      <product-item
        class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="prod in productsPopular"
        :key="prod._id"
        :id="prod._id"
        :type="prod.type"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="currentPagePopular > 1">
          <a class="page-link" @click="previousPopular('')" >Previous</a>
        </li>
        <li class="page-item" v-for="page in maxPagesPopular" :key="page"><a class="page-link" @click="pageByNumberPopular(page)">{{ page }}</a></li>
        <li class="page-item" v-if="currentPagePopular < maxPagesPopular">
          <a class="page-link" @click="nextPopular">Next</a>
        </li>
      </ul>
    </nav>
  </section>
  <section class="conatiner">
    <h1>Najnoviji proizvodi</h1>
    <ul class="row">
      <product-item
        class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="prod in productsLatest"
        :key="prod._id"
        :id="prod._id"
        :type="prod.type"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="currentPageLatest > 1">
          <a class="page-link" @click="previousLatest()" >Previous</a>
        </li>

        <li class="page-item" v-for="page in maxPagesLatest" :key="page"><a class="page-link" @click="pageByNumberLatest(page)">{{ page }}</a></li>

        <li class="page-item" v-if="currentPageLatest < maxPagesLatest">
          <a class="page-link" @click="nextLatest">Next</a>
        </li>
      </ul>
    </nav>   
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";
import axios from "axios";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      productsPopular: [],
      limit: 6,
      currentPagePopular: 1,
      maxPagesPopular: 0,
      productsLatest: [],
      currentPageLatest: 1,
      maxPagesLatest: 5,
      type: ""
    };
  },
  methods: {
    async loadData() {
      const responsePopular = await axios.get(
        "https://api.zavrsnirad.xyz/products?sort=popular&page=1&limit="+this.limit
      );
      const responseLatest = await axios.get(
        "https://api.zavrsnirad.xyz/products?sort=latest&page=1&limit="+this.limit
      );
      this.productsPopular = responsePopular.data.results;
      this.productsLatest = responseLatest.data.results;
      this.maxPagesPopular = responsePopular.data.maxPages;
      console.log(this.productsLatest);
    },
    async nextPopular(){
      this.currentPagePopular++
      const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?"+this.type+"&sort=popular&page="+ this.currentPagePopular +"&limit="+ this.limit
      );
      this.productsPopular = response.data.results;
    },
    async nextLatest(){
      this.currentPageLatest++
      const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?sort=latest&page="+ this.currentPageLatest +"&limit="+ this.limit
      );
      this.productsLatest = response.data.results;
    },
    async previousPopular(){
      this.currentPagePopular--
       const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?"+this.type+"&sort=popular&page="+ this.currentPagePopular +"&limit="+ this.limit
      );
      this.productsPopular = response.data.results;
    },
    async previousLatest(){
      this.currentPageLatest--
       const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?sort=latest&page="+ this.currentPageLatest +"&limit="+ this.limit
      );
      this.productsLatest = response.data.results;
    },
    async pageByNumberPopular(number){
      const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?"+this.type+"&sort=popular&page="+ number +"&limit="+ this.limit
      );
      this.productsPopular = response.data.results;
      this.currentPagePopular = number
    },
    async pageByNumberLatest(number){
      const response = await axios.get(
        "https://api.zavrsnirad.xyz/products?sort=latest&page="+ number +"&limit="+ this.limit
      );
      this.productsLatest = response.data.results;
      this.currentPageLatest = number
    },
    async setTypeValue(type){
      if(type==""){
        this.type = ""
      }else{
        this.type = "type=" + type
      }
      this.currentPagePopular = 1
      const responsePopular = await axios.get(
        "https://api.zavrsnirad.xyz/products?"+this.type+"&sort=popular&page=1&limit="+this.limit
      );
      this.productsPopular = responsePopular.data.results
      this.maxPagesPopular = responsePopular.data.maxPages;
    }
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.landingPage{
  background-image: url("https://i.imgur.com/t8vNgPE.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 55vh;
  background-position: 50% 50%;
  padding-top: 25vh
}
.container{
  height: 100vh;
  margin-bottom: 50px;
}
h1{
  text-align: center;
}
a{
  cursor: pointer;
}
</style>