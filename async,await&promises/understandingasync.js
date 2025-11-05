// function sana(callback){
//     setTimeout(callback,2000)
// }
// sana(function(){
//     console.log("hello")
// })
function sana(){
    let p=new Promise(function(resolve){
        setTimeout(resolve("sana"),2000)
    })
    return p
}
const value=sana()
value.then(function(data){
    console.log(data)
})