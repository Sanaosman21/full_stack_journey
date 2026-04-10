//creating http server 
//express
//node default library =>no
//undestanding through doctor example 

const express=require("express")
const app =express()//like room in a clinic
function sum(n){
let ans=0;
for (let i=0;i<=n;i++){
    ans=ans+i;
}
return ans
}
app.get("/", function(req,res){
    const n=req.query.n;
    const ans=sum(n)
    res.send("hi your ans is "+ans);
})
app.listen(3000)//now doctor is waiting for pateint (requets)

/**request methods
GET:going for a consultation to get a chec
POST:going to get a new kidney inserted
PUT:going to get kidney replaced
DELETE:going to get a kidney removed 
##status codes:
200:everything went fine
404:doctor not in the hospital it means route does not exist(if there is route handler is does not exist so server usually suppose to send 404 error)
500:if something went wrong
411:inputs were incorrect ,wrong person came to surgery
403:you were not allowed in hospital
***/
//create an in memory hospital

