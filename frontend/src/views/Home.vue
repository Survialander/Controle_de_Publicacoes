<template>
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Publicações</h1>
                <p class="lead">Controle de pedidos.</p>
                    
                <router-link :to="`/cadastrarPedido`" class="btn"> 
                   <button type="button" class="btn btn-danger">Cadastrar Pedidos</button> 
                </router-link>

                <router-link :to="`/listar`" class="btn">
                    <button type="button" class="btn btn-info">Ver Pedidos</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
div{
    margin: 5px;
}
</style>
