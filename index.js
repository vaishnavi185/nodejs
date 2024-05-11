var express = require('express');
var app = express();
const path = require('path')
app.use(express.static(path.join(__dirname ,'Public')))
app.get('/hello',function(req,res){
    res.send('hello world')
});
app.get('/about', function(req,res) {
    res.sendFile(path.join(__dirname ,'index.html'))

})
app.get('/contact', function(req , res){
    res.json({'tanya':90})
})
app.listen(2008);
console.log('http://localhost:2008}')

