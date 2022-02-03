<template>
  <section >
    <div class="container">
      <div>
        <label>Trazi: </label>
        <input class="form-control" type="text" v-model="searchValue">
      </div>
    <div class="form-group">
      <label>Cijena min: </label>
      <input class="form-control" type="number" v-model="cijenaMin">
    </div>
    <div class="form-group">
      <label>Cijena max: </label>
      <input class="form-control" type="number" v-model="cijenaMax">
    </div>
    <div class="form-group">
      <label>Tip Proizvoda: </label>
      <select class="form-control" v-model="tipProizvoda" name="type">
        <option value="">Svi proizvodi</option>
        <option value="processor">Processor</option>
        <option value="maticnaploca">Maticna Ploca</option>
        <option value="ram">Ram</option>
        <option value="pohranapodataka">HDD & SSD</option>
        <option value="grafickakartica">Graficka kartica</option>
        <option value="kuciste">Kuciste</option>
        <option value="napojnajedinica">Napojna Jedinica</option>
        <option value="ventilatorkuler">Ventilatori i kuleri</option>
      </select>
    </div>
    <div class="form-group">
      <label>Sortiraj po:</label>
      <select class="form-control" name="sortType" v-model="sortType">
        <option value=""  selected>Odaberite tip</option>
        <option value="min-max">Cijena Min->Max</option>
        <option value="max-min">Cijena Max->min</option>
        <option value="zadnjeDodano">Zadnje Dodano</option>
      </select>
    </div>
    <div>
      <button class="btn btn-primary" @click="loadSearch">Trazi</button>
    </div>
  </div>
    
    <ul class="row">
      <product-item class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="prod in products"
        :key="prod._id"
        :id="prod._id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";
import axios from "axios"
export default {
  components: {
    ProductItem,
  },
  data(){
    return{
      searchValue: "",
      products: [],
      cijenaMin: 0,
      cijenaMax: 0,
      tipProizvoda: "",
      sortType: "",
      queryArguments: ""
    }
  },
  created(){
    this.loadSearchValue();
    this.loadSearch();
  },
  methods:{
    async loadSearch(){
      if(this.searchValue.length>0){
        this.queryArguments = "searchValue=" + this.searchValue + "&"
      }
      if(this.tipProizvoda.length>0){
        this.queryArguments += "type=" + this.tipProizvoda + "&"
      }
      if(this.cijenaMin>0){
        this.queryArguments += "minPrice=" + this.cijenaMin + "&"
      }
      if(this.cijenaMax>0){
        this.queryArguments += "maxPrice=" + this.cijenaMax + "&"
      }
      console.log(this.tipProizvoda)
      const response = await axios.get('https://api.zavrsnirad.xyz/products/search?' + this.queryArguments)
      this.products = response.data
      this.queryArguments = ""
      this.sortByType()
    },
    sortByType(){
      if(this.sortType == "min-max"){
        this.products.sort((a, b) => a.price - b.price)
      }
      if(this.sortType == "max-min"){
        this.products.sort((a, b) => b.price - a.price)
      }
      if(this.sortType == "zadnjeDodano"){
        this.products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
      }
    },
    loadSearchValue(){
      this.searchValue = this.$store.getters['search/searchValue']
    }
  }
};
</script>

<style scoped>
.container{
  width: 40%;
  margin-left: 1%;
}

@media (max-width: 480px) {
  .container {
    width: 90%;
    margin: auto;
  }
}
.btn{
  margin-top: 2px;
  margin-bottom: 2px;
}
</style>