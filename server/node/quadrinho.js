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

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function createQuadrinho(req, res){
    const camposObrigatorios = ['nome', 'valor', 'quantDispo', 'descricao', 'tipo', 'quantPaginas', 'foto'];
    const camposFaltando = [];
    console.log(req.file.path);
    camposObrigatorios.forEach(field => {
        if (!req.body[field]) {
            camposFaltando.push(field);
        }
    });

    if (camposFaltando.length > 0) {
        return res.status(400).json({ ok: false, camposObrigatorios: `${camposFaltando.join(', ')}` });
    }else{
        const sql = `INSERT INTO quadrinho(nome, valor, quantDispo, descricao, tipo, quantPaginas, foto) VALUES(?, ?, ?, ?, ?, ?, ?);`
        const values = [req.body.nome, req.body.valor, req.body.quantDispo, req.body.descricao, req.body.tipo, req.body.quantPaginas, req.file.path];
         open.query(sql, values, (err, result) => {
            console.log(result);
            if(err){
                console.log(err);
                res.send({ok: false, message: 'Erro ao inserir dados'})
            }else{
                res.send({ok: true})
            }
         })
    }
    
}

function getQuadrinhos(req, res){
    const sql = 'SELECT * FROM quadrinho;'
    open.query(sql, (err, result) => {
        if (err){
            res.send({ok: false, message: 'Erro ao retornar quadrinhos'})
        }else {
            res.send({ok: true, quadrinhos: result})
        }
    })
}

function getQuadrinho(req, res){
    const sql = `SELECT * FROM quadrinho WHERE quadrinho_id = ${req.body.quadrinho_id};`
    open.query(sql, (err, result) => {
        if(result.length > 0){
            if(err){
                res.send({ok: false, message: 'Erro ao retornar os dados'})
            }else {
                res.send({ok: true, quadrinho: result})
            }
        }else{
            res.send({ok: false, message: 'Esse quadrinho não existe'})
        }
    })
}

function deleteQuadrinho(req, res){
    console.log(req.body);
    const sql = `DELETE FROM quadrinho WHERE quadrinho_id = ${req.body.quadrinho_id};`
    open.query(sql, (err, result) => {
        console.log(result);
        if(result.affectedRows > 0){
            if(err){
                res.send({ok: false, message: 'Erro ao apagar quadrinho'})
            }else{
                res.send({ok: true})
            }
        }else{
            res.send({ok: false, message: 'Esse quadrinho não existe'})
        }
    })
}

module.exports = {
    createQuadrinho,
    getQuadrinhos,
    getQuadrinho,
    deleteQuadrinho
};


