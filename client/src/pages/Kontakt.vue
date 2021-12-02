<template>
<section>
    <div v-if="isSuccessful" class="alert alert-success" role="alert">
      Pitanje poslano
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
      <div class="mb-3">
        <label>Pitanje</label>
        <textarea class="form-control" v-model="question" type="text" style="height: 15rem;"></textarea>
    </div>
    <button @click="validate" class="btn btn-primary mt-2">Pošalji pitanje</button>
    </form>
  </section>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      email: "",
      question: "",
      isSuccessful: false,
      errors: "",
    };
  },
  methods: {
    validate() {
      this.errors = [];
      if (this.name == "") {
        this.errors.push("Uneiste ime i prezime");
      }
      if (
        !this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.push("Uneiste email");
      }
      if (this.question == "") {
        this.errors.push("Uneiste pitanje");
      }

      if (this.errors.length == 0) {
        this.sendQuestion();
      }
    },
    sendQuestion(){
        axios
        .post("http://api.zavrsnirad.xyz/questions", {
          name: this.name,
          email: this.email,
          question: this.question,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.isSuccessful = true;
        setTimeout(() => (this.isSuccessful = false), 2000);
    }
  },
};
</script>

<style scoped>
section{
  margin: 1rem auto 1rem auto;
  width: 60%;
}
</style>