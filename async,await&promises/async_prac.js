//question 1
// function greetAsync(name){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>resolve(name),1000)
//  })
// }
// greetAsync("sana").then((name)=>{
//     console.log("hello",name)
// })
//question2
function checkeven(num){
    return new Promise((resolve ,reject)=>{
          if (num%2==0){
                resolve("it's an even number")
             }
             else 
            {
               reject("not an even number")
            }
    })
}
checkeven(7).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})