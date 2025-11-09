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
  console.log("he there 2")
  console.log(value)
}
main()
console.log("after main")