const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

const open = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'q_online', 
    password: 'Sou1tera'
});

open.connect((err)=>{
    if(err) throw err;
    console.log('Conectado ao Banco de Dados');
})
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function depositarValor(req, res) {
    if(req.body.valor !== 0){
        const sql = `UPDATE usuario SET valor = ${req.body.valor} WHERE usuario_id = 2;`;
        open.query(sql, (err) => {
            if (err) {
                res.send({ok: false, message: 'Erro ao depositar'});
            } else {
                res.send({ok: true});
            }
        });
    } else {
        res.status(400).res.send({ok: false, message: 'O valor não pode ser zero'});
    }
}

function getValor(req, res) {
    const sql = `SELECT * FROM usuario WHERE usuario_id = 2`;
    open.query(sql, (err, result) => {
        if(result[0].valor != 0){
            if (err) {
                res.send({ok: false, message: 'Erro ao retornar saldo'});
            } else {
                res.send({ok: true, valor: result[0].valor});
            }
        }else{
            res.send({ok: false, message: 'Saldo insuficiente'});
        }
        
    });
}

function sacarValor(req, res) {
    const sql = `UPDATE usuario SET valor = 0 WHERE usuario_id = 2`;
    open.query(sql, (err) => {
        if(err) {
            res.send({ok: false, message: 'Erro ao sacar'});
        } else {
            res.send({ok: true, valor: 0});
        }
    });
}

module.exports = {
    depositarValor,
    getValor,
    sacarValor
};
