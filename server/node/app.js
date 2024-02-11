const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8081;

var open = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'q_online', 
    password: 'Sou1tera'
})

open.connect((err)=> {
    if(err) throw err;
    console.log('conectado ao bd');
})

app.get('/depositar', (req, res)=> {
    sql = `INSERT INTO usuario(valor) VALUES(2);`
    open.query(sql, (err) => {
        if (err) throw err;
        console.log('adicionado com sucesso');
    })
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log('servidor rodando');
})