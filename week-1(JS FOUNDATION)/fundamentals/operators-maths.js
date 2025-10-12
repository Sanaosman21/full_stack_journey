// An operator is unary if it has a single operand.
let x=1 
x=-x
console.log(x)
//An operator is binary if it has two operands
let z = 1, y = 3;
console.log( y - z );
//remainder operator %
console.log(5%2)//1
console.log(8%3)//2
console.log(8%4)//0
//exponential **
console.log(2**2)
//STRING CONCATENATION
let s = "my" + "string";
console.log(s); // mystring
//Note: that if any of the operands is a string, then the other one is converted to a string too.
console.log('1'+2)
console.log(2 + 2 + '1' ); // "41" and not "221"
/**Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41' */
console.log('1' + 2 + 2); // "122" and not "14"

// other than + all other opertors works only with numbers 
console.log(6-'2')//4
console.log('6'/'2')//

/**
 Numeric conversion, unary +
 The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
 */
// No effect on numbers
let a = 1;
console.log( +a); // 1

let b = -2;
console.log( +b ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log(+"")// No effect on numbers


let apples = "2";
let oranges = "3";

alert( apples + oranges )//this gives you string but if yiu want to the sum the you need to convert them into integer and then sum
console.log(+apple + +oranges )//5 here unary plus has an higher order precedence so first converts them into numbers and the add because addition + has lower precedencs than unary \

//ASSIGNMENT OPERATOR
//assignment operator have very low priority .
let d=2*2+1//perform calculations first and then assign a value
console.log(d)
//chaining of assignmnets 
let g,h,i
g=h=i=2+2//gues the value of g,h,i
//modify-in-place
let n=5
n+=5
n*=5
console.log(n)
//modify and assign 
n*=3+5//right part evaluated first
 
//increment and decrement 
counter=2
counter++
console.log(counter)
//decrement
counter=2
counter--
console.log(counter)
//post increment and preincrement
let counter = 1;
alert( 2 * ++counter ); // 4
let counter2= 1;
alert( 2 * counter2 );
counter2++;
//Bitwise operators
//1.comma 
//The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
let t = (1 + 2, 3 + 4);
console.log(t)//comma has a very low precendence
//comma throws away everything except the last expression than why do we need ?use it in more complex constructs to put several actions in one line

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++);

//key notes
/**null becomes 0 after the numeric conversion and
 undefined becomes nan  after the numeric conversion
 "\t \n"-2=-2 #spaces becomes zero 
 */

//NOT syntax  result=!value #it returns the inverse value
//!! double not is used to convert a value to boolean type 
//have the highest precendence 

/**
 Nullish coalescing operator ??
 We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined
 The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.
The precedence of the ?? operator is the same as ||
 */