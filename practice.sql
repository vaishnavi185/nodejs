use northwind;

select count(Country) from Customers;

select * from Customers;

select * from Customers where  City ="Berlin";
select count(distinct Country) from Customers;


select * from Customers where ContactName="yun";
select * from Customers where Country="Germany" AND city  in ("Berlin" ,"Aachen");

select * from Customers order by  CustomerID desc;


select * from Customers where CustomerName='Cardinal'

INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

select * from Customers where CustomerName='Cardinal'

select CustomerName from Customers where Address IS Not Null;

SELECT 
    *
FROM
    Products
WHERE
    price BETWEEN 20 AND 100;

select * from Products where price <> 100;
Update Products set ProductName = 'tables' where ProductID =1;
select * from Products ;
select * from Products Limit 10;
select Min(Price) from products;
select Max(Price) from products;
select sum(price) from Products;
select avg(price) from Products;
select ProductID as ID from Products;

select CustomerName ,concat_ws('*',Address,PostalCode) as address from Customers;

select * from Customers ,orders where Customers.customerID = orders.customerID;
select o.orderID ,o.orderDate ,c.customerID ,c.Customername from Customers as c , orders as o where c.customerID =o.customerID;
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE 
 Customers.CustomerID=Orders.CustomerID;


SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn'  AND c.CustomerID=o.CustomerID;







 

