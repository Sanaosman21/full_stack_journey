//create in memory hospital
const express = require("express")
const app=express()
const port=3000
var users=[{
    name:"sana",
    kidneys:[{
        healthy:false
    }]
}];
app.get("/",function(req,res){
   //write logic 
   const sanakidney=users[0].kidneys;
   const numberofkidney=sanakidney.length
   const healthykidney=0
   for (let i=0;i<=sanakidney.length;i++){
    if(sanakidney[i].healthy){
        healthykidney=healthykidney+1
    }
    const numberofunhealthykidney=numberofkidney-healthykidney;
    res.json({
        sanakidney,
        healthykidney,
        numberofunhealthykidney
    })
} 
})
//middlewares
app.use(express.json());
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"done"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
app.delete("/",function(req,res){
    if (atleastoneunhealthykidney()){
    const newkidney=[];
    for(let i=0 ;i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidney;
    res.json({msg:"done"})
}
else{
    res.status(411).json({
        msg:"ypu have no bad kidneys"
    })
}

})
function isthereatleastoneunhealthykidney(){
    let atleastoneunhealthykidney=false;
    for (let i=0;i<users[0];i++){
      if(!users[0].kidneys[i].healthy) {
        atleastoneunhealthykidney=true
      }
    }
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})