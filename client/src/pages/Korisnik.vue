<template>
  <div class="wrapper">
      <div>
        <label>Email: {{ email }}</label>
      </div>
      <div>
        <label>Ime i prezime: {{ name }}</label>
      </div>
      <div>
        <label>Username: {{ username }}</label>
      </div>
      <div>
        <label>Adresa: {{ adress }}</label>
      </div>
      <div>
        <label>Grad: {{ city }}</label>
      </div>
      <div>
        <label>Poštanski broj: {{ postalCode }}</label>
      </div>
      <div>
        <label>Broj telefona: {{ phoneNumber }}</label>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        email(){
            return this.$store.getters['login/user'].email
        },
        name(){
            return this.$store.getters['login/user'].name
        },
        username(){
            return this.$store.getters['login/user'].username
        },
        adress(){
            return this.$store.getters['login/user'].adress
        },
        city(){
            return this.$store.getters['login/user'].city
        },
        postalCode(){
            return this.$store.getters['login/user'].postalCode
        },
        phoneNumber(){
            return this.$store.getters['login/user'].phoneNumber
        }
    }
}
</script>

<style scoped>
.wrapper{
    width: 500px;
    margin: auto;
    margin-top: 10%;
    margin-bottom: 10%;
}
label{
    font-size: large;
}
</style>