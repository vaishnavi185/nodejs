const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/upload') {
      let form = new formidable.IncomingForm();
      form.parse(req);
      form.on('fileBegin',function(name,file){
        file.filepath = __dirname + '/upload/'+ file.originalFilename;
     
      })
      form.on('file',function(){
        res.write('file upload')
        res.end();
        console.log('uploaded')
      })

    } else {
        let html = fs.readFileSync('a.html');
        res.write(html);
        res.end();
    }
   
}).listen(8000);

console.log("Server is running on port 8000");
