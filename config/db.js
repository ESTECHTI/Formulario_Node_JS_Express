var mysql = require('mysql');

var con = function(){
  return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'11/03/1983',
    database:'curso_node'
  });
};

module.exports = con;
