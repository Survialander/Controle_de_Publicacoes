const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://survialander:and123@ds133865.mlab.com:33865/publicacoes', {
    useNewUrlParser: true
})

app.use(require('./routes.js'));

app.listen(300, (req, res) => {
    console.log('servidor funcionando');
})