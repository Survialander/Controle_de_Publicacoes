const express = require('express');
const router = express.Router();

const PedidoController = require('./controller/PedidoController');

router.get('/listar-pedidos', PedidoController.index);
router.post('/cadastrar-pedido', PedidoController.save);

module.exports = router;