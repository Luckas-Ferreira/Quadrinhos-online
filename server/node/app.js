const express = require('express');
const bodyParser = require('body-parser');
const moneyRoutes = require('./money');
const quadrinhoRoutes = require('./quadrinho');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.put('/depositarValor', moneyRoutes.depositarValor);
app.get('/getValor', moneyRoutes.getValor);
app.put('/sacarValor', moneyRoutes.sacarValor);
app.post('/createQuadrinho', quadrinhoRoutes.createQuadrinho);
app.get('/getQuadrinhos', quadrinhoRoutes.getQuadrinhos);
app.post('/getQuadrinho', quadrinhoRoutes.getQuadrinho);
app.post('/deleteQuadrinho', quadrinhoRoutes.deleteQuadrinho);

app.listen(port, (err) => {
    if (err) throw err;
    console.log('servidor rodando');
});
