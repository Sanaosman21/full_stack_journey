const prompt = require('prompt-sync')();
function reverse(){
    let num=prompt("enter the number")//Prompts the user to enter a number
    let reverse_number=" " // // Initialize an empty string to hold the reversed number
    for (let i =num.length-1;i>=0;i--) //  Loop from the end of the input string to the beginning
    {
         reverse_number+=num[i]//Concatenate each digit (character) in reverse order
    }
    return reverse_number  // Convert the reversed string back to a number and return it
}
const num4=reverse()
console.log(num4)




