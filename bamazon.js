var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var keys = require('./keys.js');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"