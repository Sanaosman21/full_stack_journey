function greetAsync(name){
    return new Promise((resolve,reject) => {
        setTimeout(()=>resolve(name),1000)
 })
}
greetAsync("sana").then((name)=>{
    console.log("hello",name)
})