const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://survialander:and123@ds133865.mlab.com:33865/publicacoes', {
    useNewUrlParser: true
})

app.use(cors());
app.use(require('./routes.js'));
app.use(express.json());

app.listen(300, (req, res) => {
    console.log('servidor funcionando');
})