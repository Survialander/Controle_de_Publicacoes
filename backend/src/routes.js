const express = require('express');
const router = express.Router();

const PedidoController = require('./controller/PedidoController');

router.get('/listarPedidos', PedidoController.index);
router.post('/cadastrarPedido', PedidoController.save);

module.exports = router;