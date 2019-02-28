<template>
    <div id="app">
       <div class="jumbotron fluid  ">
           <h4 class="display-4">Pedido: </h4>
           <p><textarea id="pedido" cols="80" rows="7"></textarea></p>
           <button class="btn btn-danger" @click="getPedidoData()">Salvar Pedido</button>
           <button id="concluir" class="btn btn-info" @click="savePedido()" disabled>Concluir Pedido</button>
       </div>
    </div>
</template>

<script>
import {APIService} from '../services/api.js'
const apiService = new APIService();

export default {
    
    data(){
        return{
            Pedido: '',
        }
    },

    mounted(){

    },

    methods:{
        getPedidoData(){
            this.Pedido = document.getElementById('pedido').value
            document.getElementById('concluir').disabled = false;
           // console.log(this.Pedido);  
        },

        savePedido(){
            apiService.salvarPedido(this.Pedido)
        }
    }
}
</script>

<style>

button{
    margin: 5px;
}

</style>
