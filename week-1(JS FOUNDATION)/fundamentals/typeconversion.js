const prompt = require('prompt-sync')();
//prompt returns value of type string for airthematic operations values need to type cast (parseInt , parseFloor etc)
let num1=parseInt(prompt("enter the num1:"))
let num2=parseInt(prompt("enter the num2:"))
sum=num1+num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

/**HACKER RANK PROBLEM
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    let sum=firstInteger+parseInt(secondInteger)
    console.log(sum)
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    let decimal=firstDecimal+parseFloat(secondDecimal)
    console.log(decimal)
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(firstString+secondString)
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
}
//Important notes 
// Numeric conversion in mathematical functions and expressions happens automatically.
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

// For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers
//We can use the Number(value) function to explicitly convert a value to a number:

// Value->Becomes…
// undefined->NaN
// null->0
// true and false	1 and 0