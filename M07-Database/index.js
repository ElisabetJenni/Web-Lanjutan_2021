const mysql      = require('mysql');
const express = require('express');

//create connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

//connect
db.connect((err) => {
    if (err) {throw err;}
  console.log('Connected!');
});

const app = express();

//create db
app.get('/createdb',(req, res) => {
    let sql = 'CREATE DATABASE my_db';
    db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Database Created');
    });
});

app.listen(3000, () => {
    console.log('server start');
  });