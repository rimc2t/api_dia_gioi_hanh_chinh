const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1302",
    database: "dia_gioi_hanh_chinh"
});

module.exports = con;