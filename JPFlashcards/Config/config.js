// create database connetion
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',    
    password : '',
    database : 'jp_flashcards'
});
// check for errors
connection.connect(function(err){
    if(!err) {
        console.log("Database Connected");
    } else {
        console.log("Error occurred while connecting with the database");
    }
});

module.exports = connection;