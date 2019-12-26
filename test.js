const fs = require('fs');
//reading file 
// var readMe = fs.readFileSync('test.txt', 'utf8');
// console.log(readMe)

//reading file with the help of function
// fs.readFile('test.txt','utf8',function(err, data){
// console.log(data);
// });

//writing file
// fs.readFile('test.txt', 'utf8', function (err, data) {
//     console.log(data);
//     fs.writeFile('write.txt', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//         //deleting the file
//         fs.unlink('write.txt', (err) => {
//             if (err) throw err;
//             console.log('file was deleted');
//         });
//     });
// });

//creating directory,writing file and unlinking
// fs.mkdir('test', function () {
//     fs.readFile('test.txt', 'utf8', function (err, data) {
//         fs.writeFile('./test/writetest.txt', data, (err) => {
//             fs.unlink('./test/writetest.txt', (err) => {
//                 if (err) throw err;
//                 console.log('file was deleted');
//                 // fs.rmdir('test');
//             });
//         });
//     });
// });

//reading a .html file and returning content on web
// var http = require('http');
// var server = http.createServer(function(req,res){
//     fs.readFile('index.html', function(err,data){
//         res.writeHead(200, {'content-type':'text/html'});
//         res.write(data);
//         res.end();
//     });
// });
// server.listen(3000, 'localhost');

//sending json object 
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });
    var myObj = {
        name: 'paul',
        occupation: 'developer',
        city: 'singapore'
    }
    res.end(JSON.stringify(myObj));
});
server.listen(3000, 'localhost');