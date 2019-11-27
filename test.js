//reading file 
// var fs= require('fs');
// var readMe = fs.readFileSync('test.txt', 'utf8');
// console.log(readMe)

//reading file with the help of function
// var fs= require('fs');
// fs.readFile('test.txt','utf8',function(err, data){
// console.log(data);
// });

//writing file
const fs = require('fs');
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

//creating directory,writing file and unlinking it
fs.mkdir('test', function(){
    fs.readFile('test.txt', 'utf8', function(err, data){
        fs.writeFile('./test/writetest.txt', data, (err)=>{
            fs.unlink('./test/writetest.txt', function( err){
            });
        });
    });
});