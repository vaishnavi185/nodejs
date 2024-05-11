var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();

// Middleware to handle file uploads
app.use(fileUpload());

// Route to handle file uploads
app.post('/uploads', function(req, res) {
    if (req.files && Object.keys(req.files).length !== 0) {
        const uploadedFile = req.files.uploadFile;
        const uploadPath = __dirname + "/uploads/" + uploadedFile.name;

        uploadedFile.mv(uploadPath, function(err) {
            if (err) {
                console.log(err);
                res.send("Failed !!");
            } else {
                res.send("Successfully Uploaded !!");
            }
        });
    } else {
        res.send("No file uploaded !!");
    }
});

// Route to handle file download
app.get('/download', function(req, res) {
    res.download(__dirname + '/a.txt', function(err) {
        if (err) {
            console.log(err);
        }
    });
});

// Route to serve index.html
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/in.html");
});

// Start the server
app.listen(9009, function() {
    console.log("Server started at http://localhost:9009");
});
