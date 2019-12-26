var express = require('express');
var app  = express();

app.get('/', function(res,req){
    req.send('this is sample navigation');
})
app.listen(3000);