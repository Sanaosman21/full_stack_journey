// console.log("hello world");
// let a=0
// function calculatesum(){
//     for(let i=0;i<=10;i++){
//         a=a+1
//     }
//     console.log(a)
// }
// calculatesum()
// console.log("hello world")
// setTimeout(function(){
//     console.log("from inside async function")
// },2000);//after completing 
// setTimeout(function(){
//     console.log("from inside async function2")
// },1000);
//  let a=0
 
// for(let i=0;i<=10;i++){
//        a=a+1
//     }
// console.log(a)

//promises 
const promise1=new Promise(function(resolve,reject){
     //do asyn task
     setTimeout(function(){
        console.log("async task is complete");
        resolve()
     },1000)
})
promise1.then(function(){
    console.log("promise is consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved")
})

const promise3=new Promise(function(resolve,reject0){
      setTimeout(function(){

        resolve({username:"sana",email:"sanacodes21@gmail.com"})
      },1000)
}).then(function(user){
  console.log(user)
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sana",password:"123"})
        }else{
            reject("ERROR Something went wrong")
        }

    },1000)
})
.then((user)=>{
   console.log(user)
   return user.username
})
.then((username)=>{
console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("the promise is either resolved or rejected "))


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sana",password:"123"})
        }else{
            reject("ERROR Something went wrong")
        }

    },1000)
})
async function consume(){
   try{
    const repsonse =await promise5
    console.log(response)

   }catch(error){
    console.log(error)
   }
}
consume()
async function getalluser(){
    const response = await fetch
}