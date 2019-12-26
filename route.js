const fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    console.log(`req made to ${req.url}`);
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if (req.url ==='/learn'){
       var learners =[{name:'a',age:'20'},{name:'c',age:'30'}];
       res.writeHead(200, {'content-type': 'application/json'});
       res.end(JSON.stringify(learners));
    } else {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(3000, 'localhost');
console.log(`listening`);