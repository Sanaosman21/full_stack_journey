const express=require("express")
const cors = require("cors");

const app=express()
app.use(cors());
app.get("/simpleinterest",(req,res)=>{
    const p=parseInt(req.query.p)
    const r=parseInt(req.query.r)
    const t=parseInt(req.query.t)
    const simpleinterest=(p*r*t)/100
    res.send(simpleinterest.toString())
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});