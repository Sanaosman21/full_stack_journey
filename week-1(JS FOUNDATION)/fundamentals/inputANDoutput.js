const prompt = require('prompt-sync')(); 
let name = prompt("Enter your name: ");// prompt() and alert() functions only on browser
console.log("Hello, " + name);//works in both browser and node js
//altenative to alert() in node js 
console.log("This is a message");
console.warn("This is a warning");
console.error("This is an error"); 