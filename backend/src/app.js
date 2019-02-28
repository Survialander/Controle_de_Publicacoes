const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const Pedido = require('./models/Pedido');


mongoose.connect('mongodb://survialander:and123@ds133865.mlab.com:33865/publicacoes', {
    useNewUrlParser: true
})


app.use(cors());
app.use(express.json());
app.use(require('./routes.js'));


app.listen(300, (req, res) => {
    console.log('servidor funcionando');
})

// app.post("/cadastrar-pedido", (req, res) => {
//     var pedido = new Pedido();
//     pedido.content = req.body.content;
//     console.log(pedido);
//     console.log(req.body);

//     pedido.save()
//         .then(item => {
//             res.status(200).json(item);
//             console.log(item);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(400).send("Erro", err);
//         });
// });