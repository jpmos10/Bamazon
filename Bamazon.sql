CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
	ItemID INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(100) NOT NULL,
	DepartmentName VARCHAR(100) NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	StockQuantity INTEGER(10),
	PRIMARY KEY (ItemID)
);



INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('XBOX One','Electronics',399.00,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('72" Curved Screen TV','Electronics',1200.99,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('AJAX','Cleaning',.99,25);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Tide Pods','Cleaning',12.99,9);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('20 oz. Hammer','Hardware',25.00,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('20V Cordless Drill','Hardware',99.00,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('OTR Microwave Oven','Appliances',399.00,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Front Load Washing Machine','Appliances',899.00,5);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('10lb Rib-Eye Roast','Meat',60.00,10);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('10lb Tilapia','Meat',15.00,10);