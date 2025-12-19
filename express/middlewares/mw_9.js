const express=require("express")
const app=express()
function addreqtime(req,res,next){
    req.requestTime=new Date().toISOString();
    next()
}
app.use(addreqtime);
app.get("/time",(req,res)=>{
    res.send(`current time is ${req.requestTime}`)
})
app.get("/meta",(req,res)=>{
    res.json({
        path:req.path,
        time:req.requestTime
    })
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});