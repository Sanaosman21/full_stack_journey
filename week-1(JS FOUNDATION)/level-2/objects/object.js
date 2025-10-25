const prompt = require('prompt-sync')();
//  Object notes
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax That declaration is called an object literal.

// object example:
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30

// To remove a property, we can use the delete operator:
delete user.age;
console.log( user.age );//shows undefined after deletion
// We can also use multiword property names, but then they must be quoted:
let user1 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
 };
//   For multiword properties, the dot access doesn’t work:
//  this would give a syntax error
// user.likes birds = true//error
// Because JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

// There’s an alternative “square bracket notation” that works with any string:

let user2 = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];
console.log(user["likes birds"]);//after deletion undefined
// interesting thing
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

// For instance:

let user3 = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");
//this prompt allows to give input as key so it can  ACESS the value
// access by variable
console.log( user[key] ); // John (if enter "name")

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// example 1:
let prop1 = 'wins';
let prop2 = 'losses';
let stats = {
  [prop1]: 5,
  [prop2]: 2
};
console.log(stats);
//example:2
let key1 = "language";
let key2 = "isStudent";
let obj = {
  name: "dillion",
  age: 1000,
   [key1]: "javascript",
  [key2]: true
}
console.log(obj);

//example-3
let fruit = prompt("Which fruit to buy?");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag[fruit]); // shows '5' for whatever fruit the user entered


// #PROPERTY VALUE SHORTHAND 
// In real code, we often use existing variables as values for property names.
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
console.log(user.name); // John
//properties have the same names as variables. 
//here we can use property short hand 
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
console.log(makeUser("sana",21))
//we can use both normal and shorthands in same object
 
//PROPERTY NAMES LIMITATIONS 
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:
// these properties are all right
let object = {
  for: 1,
  let: 2,
  return: 3
};

console.log( object.for + object.let + object.return );  // 6

// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
let user5 = {};
console.log( user.noSuchProperty === undefined ); // true means "no such property"
// There’s also a special operator "in" for that
let user6 = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
//left side of in there should be property name 

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.


let user7 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
test
let user8={
    name:"john",
    surname:"smith",
    
}
console.log(user8)
user8.name="sana"
console.log(user8)
delete user8.name 
console.log(user8)

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
let sana={
}
console.log(isEmpty(sana))

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum=0
for (let values in salaries){
     sum=sum+salaries[values]
}
console.log("the sum is:",sum)

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

multiplyNumeric(menu)
console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );


