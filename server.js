const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/about', function(req, res) { 
    res.send('About Page');
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("Sum of the numbers is: " + (num1 + num2));
});

app.listen(port, function(){
    console.log('Server is running on port: ' + port);
});