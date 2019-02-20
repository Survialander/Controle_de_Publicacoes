<template>
    <div id="app">
        <div class="jumbotron">
            <h1>Pedidos realizados:</h1>
            <ul class="list-group list-group-flush">
                <li v-for="item of Pedidos" :key="item._id" class="list-group-item">
                    <h3>ID: {{item._id}}</h3>
                    <p><strong>Pedido:</strong></p>
                    <p>{{item.content}}</p>
                    <p><small>{{item.createdAt}}</small></p>
                </li>
            </ul>
            <router-link :to="`/`">
                <button type="button" class="btn btn-danger"> Voltar </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {APIService} from '../services/api';

//const API_URL = 'http://localhost:300';
const apiService = new APIService()
 
export default {

data(){
    return{
        Pedidos: [],
    }
},

mounted(){
    this.getDataPedido();
},


methods:{
    getDataPedido(){
        apiService.getPedido().then((data) => {
            this.Pedidos = data;
            //console.log(this.Pedidos)
            })
        }
    }
}
   
</script>

<style>
    button{
        margin-top: 5px;
    }
</style>
