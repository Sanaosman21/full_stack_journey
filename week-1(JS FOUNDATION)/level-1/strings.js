// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Length
function getlength(str){
    console.log(str)
    console.log("length",str.length)
}
getlength("sana osman")

//indexof 
function findindexof(str,target){
    console.log("original string:",str)
    console.log("Index",str.indexOf(target))
}
findindexof("sana osman","osman")

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

//trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("         Hello World ");
// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");