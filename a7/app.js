const express = require('express');
const app = express();
const port = 3002;
const path = require('path');


//Middleware to handle the static files
app.use(express.static(path.join(__dirname, 'public')));

//The GET method returns “Got a POST request at /comp322/grade”
app.get('/comp322/grade', function(req, res){
    res.send('Got a GET request at /comp322/grade')
});

//The POST method returns “Got a POST request at /comp322/grade”
app.post('/comp322/grade', function(req, res){
    res.send('Got a POST request at /comp322/grade')
});

//The PUT method returns “Got a PUT request at /comp322/grade”
app.put('/comp322/grade', function(req, res){
    res.send('Got a PUT request at /comp322/grade')
});

//The DELETE method returns “Got a DELETE request at /comp322/grade”
app.delete('/comp322/grade', function(req, res){
    res.send('Got a DELETE request at /comp322/grade')
});

//Route to handle favicon requests
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => console.log(`Listening on port ${port}`));
