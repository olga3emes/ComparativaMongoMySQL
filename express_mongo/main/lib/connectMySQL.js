var mysql= require('mysql')
var express= require('express')
var app = express();

//Create connection MySQL

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "demo_test"

});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})


var queryString = "SELECT * from test_table"


connection.query(queryString)