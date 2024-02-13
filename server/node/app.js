const express = require('express');
const bodyParser = require('body-parser');
const moneyRoutes = require('./money');
const quadrinhoRoutes = require('./quadrinho');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 8081;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.put('/depositarValor', moneyRoutes.depositarValor);
app.get('/getValor', moneyRoutes.getValor);
app.put('/sacarValor', moneyRoutes.sacarValor);
app.post('/createQuadrinho', upload.single('foto'), quadrinhoRoutes.createQuadrinho);
app.get('/getQuadrinhos', quadrinhoRoutes.getQuadrinhos);
app.post('/getQuadrinho', quadrinhoRoutes.getQuadrinho);
app.post('/deleteQuadrinho', quadrinhoRoutes.deleteQuadrinho);

app.listen(port, (err) => {
    if (err) throw err;
    console.log('servidor rodando');
});
