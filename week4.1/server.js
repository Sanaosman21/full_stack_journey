const express=require("express")
const app=express()
app.get("/sum",(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const sum=a+b
    res.send(sum.toString())
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});