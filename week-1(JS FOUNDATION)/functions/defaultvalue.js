function showMessage(from, text = "no text given") {
  console.log ( from + ": " + text );
}

(showMessage("Ann")); // Ann: no text given
//if i write console.log(showMessage("Ann")) then it prints the ann: no text given and undefined because it prints two things 1)The output from inside showMessage (Ann: no text given) 2)The return value of showMessage (which is undefined)
// hence in this case console.log is used to print the return value 
//USING RETURN STATEMENT
function showMessage(from, text = "no text given") {
  return( from + ": " + text );
}

console.log(showMessage("Ann"));