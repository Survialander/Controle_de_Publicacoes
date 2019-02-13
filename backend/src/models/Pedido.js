const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    content: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Pedido', PedidoSchema)