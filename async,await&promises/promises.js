// function myownsetTimeout(fn,duration){
//     setTimeout(fn,duration)
// }
// myownsetTimeout(function(){
//     console.log("hi there")
// },1000)
///the abaove code is call backk hell to avaoid call back hell we use promises
// let n= new Promise(function(resolve){
// resolve()
// console.log(n)
// })

//

var d=new Promise(function(resolve){
    resolve()
})
function callback(){
    console.log(d)
}
d.then(callback)

// 
function random(){
    const p=new Promise(function(resolve){
        setTimeout(resolve,2000)
    
    });
    console.log(p)
    return p;
}
const value=random()
value.then(function(){
  
    console.log("done")
})