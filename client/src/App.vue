<template>
  <the-header></the-header>
  <main>
    <router-view :key="$route.path"></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from './components/nav/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  // created(){
  //   this.$store.dispatch('prods/getProducts')
  // }
};
</script>