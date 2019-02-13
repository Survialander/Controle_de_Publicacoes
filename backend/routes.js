const express = require('express');
const router = express.Router();

const PedidoController = require('./controller/PedidoController');

router.get('/', PedidoController.index);
router.post('/', PedidoController.save);

module.exports = router;