import axios from 'axios';

const API_URL = 'http://localhost:300'

export class APIService{
    constructor(){}

    getPedido(){
        const url = `${API_URL}/listar-pedidos`;
        return axios.get(url).then(response => response.data);
    }

    salvarPedido(pedido){
        const url = `${API_URL}/cadastrar-pedido`;
        return axios.post(url, { content: pedido })
        .then(response => { console.log(response) })
        .catch(error => { console.log(error) })
    }
}