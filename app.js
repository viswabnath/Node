//console statement
// console.log('Hey');

//settimeout
// setTimeout(function(){
//     console.log('5 seconds have passed');
// }, 5000);

//setinterval
// var Time = 0;
// var timer = setInterval(function () {
//     Time += 1;
//     console.log(Time + ' ' + 'seconds have passed');
//     if (Time > 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

//function statement
// function wish() {
//     console.log('hello');
// }
// wish();

//function declaration
// var bye = function () {
//     console.log('bye');
// }
// bye();

//calling function within function
// function callFunction(fun) {
//     fun();
// }
// var listen = function () {
//     console.log('listening');
// }
// callFunction(listen);


//creating module and exporting it from the other file using require module to read data in that module
var stuff = require('./stuff');
console.log(stuff.counter(['1', '2', '3', '4', '5']));
console.log(stuff.adder(3, 5));
console.log(`Value of Pi is ${stuff.pi}`);