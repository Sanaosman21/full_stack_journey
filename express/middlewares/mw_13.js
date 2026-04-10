const express=require("express")
const app=express()
const rateLimit=require("express-rate-limit")
app.use(express.json())
const loginLimiter=rateLimit({
    windowMs:10*60*1000,
    max:5,
    message:{error:'Rate limit exceeded, try again after 10 minutes'}
})
app.get("/login",loginLimiter,(req,res)=>{
  if()   
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});