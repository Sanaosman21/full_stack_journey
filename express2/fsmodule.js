const fs=require("fs")
const os=require("os")
console.log(os.cpus().length);
// //sync blocking request
// fs.writeFileSync("./test.txt","helloworld!")

//async  non blocking request 
// fs.writeFile("./test.txt","hello sana async ",(err)=>{})
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result) // async returns the result and the err can be handle by using try catch 

//sync 
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
// if (err){
//     console.log("error",err)
// }
// else{
//     console.log(result)
// }}
// )// does not return the result the type is void 

// fs.appendFileSync("./test.txt", `hello world\n`)
// console.log(fs.statSync('./test.txt'))
// fs.mkdirSync("my-docs/a/b",{recursive:true})//to create new folder 
