const express = require('express');
const bodyParser = require('body-parser');
const moneyRoutes = require('./money');

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.put('/depositarValor', moneyRoutes.depositarValor);
app.get('/getValor', moneyRoutes.getValor);
app.put('/sacarValor', moneyRoutes.sacarValor);

app.listen(port, (err) => {
    if (err) throw err;
    console.log('servidor rodando');
});
