// CREATE SCHEMA `wonju` DEFAULT CHARACTER SET utf8 ;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'wonju'
});
 
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


connection.connect();

