const express = require('express')
const app = express()
const port = 3000

var users=[{
    name:"sana",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
// console.log(users[0])

app.get("/",function(req,res){
//write logic 
const johnkidneys=users[0].kidneys;
const numberofkidneys=kidney.length;
let numberofunhealthykidney=0;
for(let i=0;i<johnkidneys.length;i++){
    if (johnkidneys[i].healthy){
        numberofkidneys=numberofkidneys+1
    }
}
})
app.post("/",function(req,res){

})
app.put("/",function(req,res){

})
app.delete("/",function(req,res){

})
app.listen(3000);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
