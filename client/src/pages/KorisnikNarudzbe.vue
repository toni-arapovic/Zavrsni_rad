<template>
  <div class="container">
    <table id="cart" class="table table-hover table-condensed" v-for="order in orders" :key="order._id">
      <thead>
        <tr>
          <th style="width: 80%">Proizvod</th>
          <th style="width: 5%">Cijena</th>
          <th style="width: 15%">Količina</th>
        </tr>
      </thead>
      <tbody>
        <user-order-item
          v-for="item in order.products"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></user-order-item>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="hidden-xs">
            <strong>Datum: {{ order.dateAdded.split('T')[0] }}</strong>
          </td>
          <td class="hidden-xs text-center">
            <strong>Ukupno: {{ order.totalSum }} KM</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import UserOrderItem from '../components/products/UserOrderItem.vue';
export default {
    components: {
        UserOrderItem
    },
    data(){
        return{
            orders: [],
        }
    },
    created(){
        this.loadData();
    },
    methods:{
      async loadData(){
        const response = await axios.get('https://api.zavrsnirad.xyz/orders/user?username='+this.$store.getters['login/user'].username)
        console.log(response)
        this.orders = response.data
      }
    }

}
</script>