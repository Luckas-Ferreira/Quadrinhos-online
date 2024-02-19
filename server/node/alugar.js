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
    const quadrinhos = req.body.quadrinhos.map(q => q.quadrinho_id);
    const sqlExist = 'SELECT quadrinho_id FROM alugados WHERE quadrinho_id IN (?);'
    open.query(sqlExist, [quadrinhos], (err, result) => {
        if(err) throw err;
        const alugados = result.map(r => r.quadrinho_id);
        const promises = req.body.quadrinhos.map(quadrinho => {
            return new Promise((resolve, reject) => {
                if(!alugados.includes(quadrinho.quadrinho_id)){
                    const sqlInsert = 'INSERT INTO alugados (usuario_id, quadrinho_id, data_aluguel) VALUES (?, ?, NOW());'
                    const values = [5, quadrinho.quadrinho_id];
                    open.query(sqlInsert, values, (err) => {
                        if(err){
                            reject('Falha ao alugar quadrinho');
                        }else{
                            const sql = 'UPDATE usuario SET valor = ? WHERE usuario_id = 5;'
                            const values = [req.body.valor]
                            open.query(sql, values, (err) => {
                                if(err) throw err;
                                resolve('Quadrinho/os alugado/os com sucesso');
                            })
                        }
                    });
                }else{
                    reject('Você já alugou esse quadrinho');
                }
            });
        });
        Promise.all(promises).then(() => {
            res.send({ok: true, message: 'Todos os quadrinhos foram alugados com sucesso'});
        }).catch((error) => {
            res.send({ok: false, message: error});
        });
    });
}


function getAlugados(req, res){
    console.log(req.body);
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