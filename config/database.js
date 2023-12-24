const mysql = require('mysql');


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "funda_app",
    multipleStatements: true
   });

module.exports = conn;