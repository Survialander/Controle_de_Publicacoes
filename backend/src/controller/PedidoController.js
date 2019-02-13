const Pedido = require('../models/Pedido')

module.exports = {
   async index(req, res){
        const pedidos = await Pedido.find({}).sort("-createdAt");

        return res.json(pedidos);
    },
    async save(req, res){
        const pedidos = await Pedido.create(req.body);

        return res.json(pedidos);
    }
}