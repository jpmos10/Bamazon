var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var keys = require('./keys.js');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Homework", //Your username
    password: "homework", //Your password
    database: "Bamazon"

})

connection.connect(function(err) {
    if (err) throw err;
});	
// Display products

function displayProducts() {

	 connection.query('SELECT * FROM Products', function(error, response) {
        if (error) { console.log(error) };
        //New instance of our constructor
        var DisplayTable = new Table({
            //declare the value categories
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            //set widths to scale
            colWidths: [10, 30, 20, 10, 15]
        });
        for (i = 0; i < response.length; i++) {
            //send data to table
            DisplayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
            );
        }

        console.log(DisplayTable.toString());
        purchaseInput();
});
 


}; 

function purchaseInput() {
    //user input for picking product
    inquirer.prompt([

        {
            name: "ID",
            type: "input",
            message: "What is the item number of the product you would like to buy?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "How many do you want?"
        },

    ]).then(function(answers) {
        var quantityPicked = answers.Quantity;
        var itemPicked = answers.ID;
        purchaseFromDatabase(itemPicked, quantityPicked);
    });

}; 

function purchaseFromDatabase(ID, quantityNeeded) {
    //verify quantity of product is available. 
    connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[0].StockQuantity) {
            // total
            var totalCost = response[0].Price * quantityNeeded;
            //notify user
            console.log("We have what you need! I'll have your order right out!");
            console.log("Thank you!! Your total for " + quantityNeeded + " " + response[0].ProductName + " is $" + totalCost + ". Thank you for your Business!");
            //update database with new quantiy after purchase
            connection.query('UPDATE Products SET StockQuantity = StockQuantity - ' + quantityNeeded + ' WHERE ItemID = ' + ID);
        } else {
            console.log("We are very sorry but We don't have enough of the product you wish to purchase." + response[0].ProductName + " to fulfill your order.");
        };
        displayProducts();
    });

}; 

displayProducts();