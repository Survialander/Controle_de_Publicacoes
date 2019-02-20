import axios from 'axios';

const API_URL = 'http://localhost:300'

export class APIService{
    constructor(){   
    }

    getPedido(){
        const url = `${API_URL}/listarPedidos`;
        return axios.get(url).then(response => response.data);
    }
}