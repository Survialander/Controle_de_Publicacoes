import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './views/Home'
import Cadastro from './views/Cadastrar'
import Listar from './views/Listar'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        
        {
            path:'/cadastrarPedido',
            component: Cadastro,
        },

        {
            path:'/listar',
            component: Listar,
        },
    ]
})