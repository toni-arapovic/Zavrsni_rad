<template>
  <section>
    <ul class="row">
      <product-item
        class="col-12 col-sm-8 col-md-6 col-lg-4"
        v-for="prod in products"
        :key="prod._id"
        :id="prod._id"
        :type="prod.type"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" v-if="currentPage > 1">
          <a class="page-link" @click="previous" >Previous</a>
        </li>

        <li class="page-item" v-for="page in maxPages" :key="page"><a class="page-link" @click="pageByNumber(page)">{{ page }}</a></li>

        <li class="page-item" v-if="currentPage < maxPages">
          <a class="page-link" @click="next">Next</a>
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
      products: [],
      limit: 6,
      currentPage: 1,
      maxPages: 0,
    };
  },
  methods: {
    async loadData() {
      const response = await axios.get(
        "http://localhost:3000/products?type=" + this.$route.params.prType + "&page=1&limit="+this.limit
      );
      this.products = response.data.results;
      this.maxPages = response.data.maxPages;
      console.log(this.products);
    },
    async next(){
      this.currentPage++
      const response = await axios.get(
        "http://localhost:3000/products?type=" + this.$route.params.prType + "&page="+ this.currentPage +"&limit="+ this.limit
      );
      this.products = response.data.results;

    },
    async previous(){
      this.currentPage--
       const response = await axios.get(
        "http://localhost:3000/products?type=" + this.$route.params.prType + "&page="+ this.currentPage +"&limit="+ this.limit
      );
      this.products = response.data.results;
    },
    async pageByNumber(number){
      const response = await axios.get(
        "http://localhost:3000/products?type=" + this.$route.params.prType + "&page="+ number +"&limit="+ this.limit
      );
      this.products = response.data.results;
      this.currentPage = number
    }
  },
  created() {
    this.loadData();
  },
};
</script>
