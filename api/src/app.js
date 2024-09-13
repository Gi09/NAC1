const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuração da conexão
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017");

// Habilitando o CORS
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

// Registrar a Model
require('./models/product');

// Registrar a Rota
const productRouter = require('./routes/product-route');
const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);

module.exports = app


