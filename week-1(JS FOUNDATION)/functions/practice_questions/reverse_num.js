const prompt = require('prompt-sync')();
function reverse(){
    let num=prompt("enter the number")
    let reverse_number=" " 
    for (let i =num.length-1;i>=0;i--)
    {
         reverse_number+=num[i]
    }
    return reverse_number
}
const num4=reverse()
console.log(num4)




