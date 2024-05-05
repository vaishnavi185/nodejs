var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/upload/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }

  console.log("Request URL:", req.url); // Move the console.log inside the createServer callback
}).listen(8080);

console.log("Server running at http://localhost:8080/");
