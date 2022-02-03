<template>
  <section class="">
    <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Logiranje uspješno!
    </div>
    <div v-if="errors.length" class="alert alert-danger" role="alert">
      <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form v-on:submit.prevent class="container">
      <div class="form-group">
        <label>Username</label>
        <input class="form-control" v-model="username" type="text" required/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" v-model="password" type="password" required/>
      </div>
    <button @click="logIn" class="btn btn-primary mt-2">Log in</button>
    <router-link to="/register" class="btn btn-primary mt-2">Registriraj se</router-link>
    </form>
  </section>
  
</template>

<script>
import axios from "axios";
import router from "../router.js"
export default {
    data(){
        return{
            username: "",
            password: "",
            isSuccessful: false,
            errors: [],
            userData: {}
        }
    },
    methods:{
      async logIn(){
        const response = await axios
        .post("https://api.zavrsnirad.xyz/login/login", {
          username: this.username,
          password: this.password,
        })
        this.message = response.data.message
        this.userData = response.data
        this.errors = []
        
        if(this.message ==  undefined){
          this.$store.dispatch("login/logIn", this.userData)
          this.isSuccessful = true;
          setTimeout(() => (this.isSuccessful = false), 2000);
          setTimeout(() => (router.push('/')), 2000);
        }else if (this.message ==  "Wrong Password"){
          this.errors.push("Pogrešan username ili password")
        }else if(this.message == "User does not exist"){
          this.errors.push("Pogrešan username ili password")
        }
        
      }
    }
}
</script>

<style scoped>
.btn{
    margin: 2px;
}
</style>