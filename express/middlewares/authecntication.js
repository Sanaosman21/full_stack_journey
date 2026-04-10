// input validation libraries 
//zod is one of the libarraies 
const express=require("express")
const app=express()
function logger(req,res,next){
    console.log(req.method)
    console.log(req.url)
    next()
}
app.use(logger)
app.get("/hello",(req,res)=>{
    res.send("hello")
})
app.get("/goodbye",(req,res)=>{
    res.send("goodbye")
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});