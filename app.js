// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('Request received');
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<b>Hel</b>');
// }).listen(2000, () => {
//   console.log('Server running at http://localhost:2000/');
// });

// var http = require("http");
// var fs = require('fs');

// http.createServer(function(req, res) {
//   fs.readFile('index.html', function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end(); 
//   });
// }).listen(2000, () => {
//   console.log('Server running at http://localhost:2000/');
// });

// app.js


// var http = require("http");
// var b = require('./b'); // Importing the b module

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(b.myDateTime()); // Call the myDateTime function exported from b.js
//   res.end(); // End the response without writing any more data
// }).listen(2000, () => console.log('Server running at http://localhost:2000/'));

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<b>Hello World!</b>'+'hello');
// }).listen(8080);

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//     fs.readFile('txt.html', function(err, data) {
       
//             res.writeHead(200, {'Content-Type': 'text/html'});
            
        
        
//         res.write(data);
//         return res.end();
//     });
// }).listen(6000);



  