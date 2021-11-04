<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created(){
    this.$store.dispatch('prods/getProducts')
  }
};
</script>