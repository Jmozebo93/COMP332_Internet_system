// Import the required modules
var http = require('http');
var fs = require('fs');
var path = require('path');

// Create a server
http.createServer(function (req, res) {

    // Construct the file path to where index.html and introduction.html are
    var filePath = './a1' + req.url;
    // If the file path is the root directory, serve the index.html file
    if (filePath === './a1/')
        filePath = './a1/Index.html';
    // Read the file from the file system
    fs.readFile(filePath, function(err, data) {
        // If there is an error (like file not found), return a 404 status
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        // If the file is found, return it with a 200 status
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
// The server is listening on port 3001
}).listen(3001);