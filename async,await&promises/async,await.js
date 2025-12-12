// async await promise
function sana(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
              resolve("hi there")
        },1000)
    
    })
    return p   
}
async function main(){
    //no call backs and no .then syntax
  let value=await sana()
  console.log("he there 2")//it does not comes immediatly so it does not mean async stuff is not happening fir example it i write console.log("something ") after main that logs immediatly means move on to other things. so here as sson as 
  console.log(value)
  //whenever awaits is  done then it starts from next line
  //we aslo can relate in promisses to 
//   sana().then(function(value)
// {
//     console.log("hey there!")
// })
//here to .then function till promise resolve after the it proceeds to then part 

}
main()
console.log("after main")