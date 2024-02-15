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


function alugarQuadrinho(req, res){
    console.log(req.body.quadrinho_id);
    //ta vindo uma lista, precisa tratar como lista essa buceta
    const isExist = 'SELECT quadrinho_id FROM alugados;'
    open.query(isExist, (err, result) => {
        if(err) throw err;
        if(result.length > 0 && result[0].quadrinho_id != req.body.quadrinho_id){
            const sql = 'INSERT INTO alugados (usuario_id, quadrinho_id, data_aluguel) VALUES (?, ?, CURRENT_DATE);'
            const values = [5, req.body.quadrinho_id]
            open.query(sql, values, (err) => {
                
                if(err){
                    res.send({ok: false, message: 'Falha ao alugar quadrinho'})
                }else{
                    res.send({ok: true, message: 'Quadrinhos alugados com sucesso'})
                }
            })
        }else if(result.length == 0){
            const sql = 'INSERT INTO alugados (usuario_id, quadrinho_id, data_aluguel) VALUES (?, ?, CURRENT_DATE);'
            const values = [5, req.body.quadrinho_id]
            open.query(sql, values, (err) => {
                
                if(err){
                    res.send({ok: false, message: 'Falha ao alugar quadrinho'})
                }else{
                    res.send({ok: true, message: 'Quadrinhos alugados com sucesso'})
                }
            })
        }else{
            res.send({ok: false, message: 'Você já alugou esse quadrinho'})
        }
    })
}

function getAlugados(req, res){
    const sql = 'SELECT alugar.data_aluguel, HQ.nome, valor, tipo, foto FROM alugados alugar INNER JOIN quadrinho HQ ON HQ.quadrinho_id=alugar.quadrinho_id;'
    open.query(sql, (err, result) => {
        if(err){
            res.send({ok: false, message: 'Erro ao retornar quadrinhos alugados'})
        }else{
           res.send({ok: true, alugados: result})
        }
    })
}

module.exports ={
    alugarQuadrinho,
    getAlugados
}