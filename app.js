// const http = require('http');

const Mail = require("nodemailer/lib/mailer");

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

/*var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('txt.html', function(err, data) {
       
            res.writeHead(200, {'Content-Type': 'text/html'});
                    
        
        res.write(data);
        return res.end();
    });
}).listen(6000);*/



// const http = require('http'); 
// const fs = require('fs');

// http.createServer(function (req, res) { 
//    fs.readFile('txt.html', function(err, data) { 
//       res.writeHead(200, {'Content-type': 'text/html'}); 
//       res.write(data);           
//       return res.end(); 
//     }); 
//  }).listen(8080);

// var http = require('http');
// var fs = require('fs')
// http.createServer(function(res,req){
//     fs.unlink('txt.html',function(err){
//         if(err) throw err;
//         console.log('file deleted');
//     })
// }).listen(4000);

// var http = require('http');
// var fs = require('fs');
// fs.rename('index.html','abc.html',function(err){
//     if(err)throw err;
//     console.log('renamed')
// })

// var fs = require('fs')
// var http = require('http')
// fs.writeFile('abc.txt','welcome',function(err){
//     if(err)throw err;
//     console.log('done');
// })

// var fs = require('fs')
// var http = require('http')
// fs.appendFile('abc.txt',"hello my name is tanya",function(err){
//     if(err)throw err;
//     console.log('appended')
// })

// var fs = require('fs')
// var http = require('http')
// fs.appendFile('mynew.txt','helllooo',function(err){
//     if(err)throw err;
//     console.log('add')
// })
// var fs = require('fs')
// fs.open('mynew1.txt','w',function(err,file){
//    if(err)throw err;
//    console.log('saved');
// })
// var url = require('url')
// var adr = 'https://chat.openai.com/domain_migration?next=https%3A%2F%2Fchatgpt.com%2F';
// var q = url.parse(adr,true);
// console.log(q.pathname);
// console.log(q.host);
// console.log(q.search);

// var http = require('http')
// var fs = require('fs')
// fs.mkdir('./image',function(err){
//     if(err)throw err;
//     console.log('folder created')
// })


var http = require('http'),
    fs = require('fs');

var post_options = {
    host: 'logger.mysite.co.uk',
    path: '/',
    port: 80,
    timeout: 120000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

var sender = http.request(post_options, function(res) {
    if (res.statusCode < 399) {
        var text = ""
        res.on('data', function(chunk) {
            text += chunk
        })
        res.on('end', function(data) {
            console.log(text)
        })
    } else {
        console.log("ERROR", res.statusCode)
    }
})

var POST_DATA = 'data={['
POST_DATA += fs.readFileSync('.\day1\mynew.txt').toString().replace(/\,+$/,'')
POST_DATA += ']}'
console.log(POST_DATA)
sender.write(POST_DATA)
sender.end()
