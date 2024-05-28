const express = require('express');
const app = express();

app.listen(8080, function() {

    console.log('test....');
});

app.get('/pet', function(req,res){
    res.send('pet......');
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});



