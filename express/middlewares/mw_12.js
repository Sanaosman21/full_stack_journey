// 1) Rate-limiter middleware (per IP, simple)
// Create a middleware that limits how many times a client can hit /ping.
const express=require("express")
const app=express()
requestsPerIp={}
function ratelimit(req,res,next){
    const {ip}=req.ip
    if(!requestsPerIp[ip]){
        requestsPerIp[ip]=0
    }
    requestsPerIp[ip]=requestsPerIp[ip]+1;
    if(requestsPerIp[ip]>5){
        return res.status(429).json({error:"Rate limit exceeded"})
    }
next()
}
app.get("/ping",ratelimit,(req,res)=>{
    res.send("pong")
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});