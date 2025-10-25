// function sum(num1,num2){
//    result=num1+num2
//   return displayresult(result)
// }
// function displayresult(data)
// {
//   console.log("result is:" ,data)

// }
// function displayresultpassive(data){
//   console.log("sum's result is :", data)
// }
// sum(4,5)

// understanding call back functions 
function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}
function sumofsquares(a,b){
  val1=square(a)
  val2=square(b)
  return val1+val2
}
function sumofcube(a,b){
  val1=cube(a)
  val2=cube(b)
  return val1+val2
}
let ans=sumofsquares(4,6)
console.log(ans)

//here you can see sumofsquare and sumofcube is logic is similar so here we can use the callback function concept
function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}
function sumofnumbers(a,b,fn){
  val1=square(a)
  val2=square(b)
  return val1+val2
}
let result=sumofnumbers(7,2,square)
console.log(result)

///concept of anonymous function
function sumofnumbers(a,b,fn){
  val1=fn(a)
  val2=fn(b)
  return val1+val2
}
let result3=sumofnumbers(7,2,function(a){
  return a*a*a;
})
console.log(result3)