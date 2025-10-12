// Example: Checking User Age
let age = 20;

if (age < 18) {
  console.log("You are too young to vote.");
} else if (age >= 18 && age < 21) {
  console.log("You can vote, but cannot buy alcohol.");
} else {
  console.log("You can vote and buy alcohol.");
}
// 2. Nested If Statements
let Age = 25;
let isMember = true;

if (Age >= 18) {
  if (isMember) {
    console.log("You get a 20% discount on your ticket!");
  } else {
    console.log("You can buy a ticket, but no discount.");
  }
} else {
  console.log("Sorry, you are too young to buy a ticket.");
}
// 3. Ternary Operator (Conditional Expression)
// syntax : condition ? expressionIfTrue : expressionIfFalse;
let canVote=(age>=18) ? "you can vote ":"you cant vote ";
console.log(canVote)
// example 2
let ismember = true;
let discount = isMember ? 0.2 : 0.0;  // 20% discount for members
console.log(`Your discount is: ${discount * 100}%`);

// // Common Mistakes Beginners Make
// Forgetting curly braces ({}): If you forget to add braces for multiple lines of code, only the first line will be part of the condition.
if (age >= 18)
  console.log("You can vote.");  // This works
  console.log("This always runs.");  // This will run regardless of the condition
 // fix:
 if (age >= 18) {
  console.log("You can vote.");
  console.log("This only runs if the condition is true.");
}
//excercies 1:Weather Report
//// Defining the isRaining variable (true for raining, false for sunny)
let isRaining = true;  // Change this value to test different conditions

// Checking the weather condition and printing the appropriate message
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}
//excersices 2://Grade Checker 
//  Defining the grade variable
let grade = 85;  // Change this value to test different conditions

// Checking the grade using if-else if-else
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80 && grade < 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else {
  console.log("Fail");
}
//Exercise 3: Ternary Operator Challenge
// Defining the number variable
let number = 7;  // Change this value to test different numbers

// Using the ternary operator to check if the number is even or odd
let result = (number % 2 === 0) ? "Even" : "Odd";

// Printing the result
console.log(result);




