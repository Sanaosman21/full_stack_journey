const fs=require("fs");
// let a=1;
// console.log(a);
fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log("data read from the file");
//     console.log(data);
          data=data+"hey sana";
          fs.writeFile(function(){
            cb()
          })
})

// let ans=0;
// for(let i=0;i<100;i++){
//     ans=ans+i;
// }
// console.log(ans)

// console.log("hey")
// setTimeout(function(){
//    console.log("hi there from inside1")
 
// setTimeout(function(){
//    console.log("hi there from inside2")
// },5000)

// },10000)
// setTimeout(function(){
//    console.log("hi there from inside23")
// },5000)
// let a=0
// for (let i=0;i<=10;i++){
//     a=a+i
// }
// console.log("after")