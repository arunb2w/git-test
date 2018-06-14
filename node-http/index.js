const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = "localhost";
const PORT = 3000;

const server = http.createServer(function(req, res) {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if(req.method === 'GET') {
        let fileUrl;
        if(req.url == '/') {
            fileUrl = '/index.html';
        }
        else {
            fileUrl = req.url;
        }
        var filepath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filepath);

        if(fileExt == '.html' ) {
            fs.exists(filepath, function(exists) {
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + 
                      ' not found</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filepath).pipe(res);
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not found</h1></body></html>');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
            ' not supported</h1></body></html>');
    }
});

server.listen(PORT, hostname, function() {
    console.log(`Server running in http://${hostname}:${PORT}/`);
});