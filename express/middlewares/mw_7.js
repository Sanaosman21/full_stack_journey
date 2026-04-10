//last thing in middlewares app.use
//
const express=require("express")
const app=express()
let numberofreq=0
function calculatereq(req,res,next){
    numberofreq++
    console.log(numberofreq)
    next()
}
app.get("/health-checkup",calculatereq,(req,res)=>{

})
app.get("/health-checkup2",calculatereq,(req,res)=>{

})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



