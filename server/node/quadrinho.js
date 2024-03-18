const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const sharp = require('sharp');
const app = express();
const fs = require('fs');
const path = require('path');


const open = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Q_online', 
    password: '1234'
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());





    function createQuadrinho(req, res){
        const camposObrigatorios = ['nome', 'valor', 'quantDispo', 'descricao', 'tipo', 'quantPaginas'];
        const camposFaltando = [];
        camposObrigatorios.forEach(field => {
            if (!req.body[field]) {
                camposFaltando.push(field);
            }
        });
    
        if(req.file == undefined){
            camposFaltando.push('foto');
        }
    
        if (camposFaltando.length > 0) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ ok: false, camposObrigatorios: `${camposFaltando.join(', ')}` });
        }else{
            const newFilePath = path.join(path.dirname(req.file.path), 'processed-' + path.basename(req.file.path));
    
            sharp(req.file.path)
                .resize(186, 294)
                .toFile(newFilePath, (err) => {
                    if (err) {
                        return res.status(500).json({ ok: false, message: 'Erro ao processar a imagem' });
                    }
                    fs.rename(newFilePath, req.file.path, (err) => {
                        if (err) {
                            return res.status(500).json({ ok: false, message: 'Erro ao salvar a imagem' });
                        }
    
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
                    });
                });
        }
    
    }


function getQuadrinhos(req, res){
    const sql = 'SELECT nome, foto, tipo, valor, quadrinho_id FROM quadrinho;'
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


