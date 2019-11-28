//creating a server and sendigng data using a particular port
// var http = require('http');
// var server = http.createServer(function (req, res) {
//     console.log(`server responding at ${req.url} this route`);
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end('Test Server');
// });
// server.listen(3000, 'localhost');
// console.log('server responding');

//passing data to server using pipe
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     var mystream = fs.createReadStream(__dirname + '/test.txt', 'utf8');
//     mystream.pipe(res);
// });
// server.listen(3000, 'localhost');
// console.log('server listening on port 3000');

//printing date and time
// var http = require('http');
// var dt = require('./stuff');
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// });
// server.listen(3000,'localhost');
// console.log('listening');

//printing date and time using url  module
var http = require('http');
var dt = require('./stuff');
var url = require('url');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
});
server.listen(3000, 'localhost');
console.log('listening');