// Assignment: API key middleware
// Goal: Only allow access to /private if the client sends ?apiKey=123 in the URL.
const express = require('express');
const app = express();
const PORT = 3000;
function checkapikey(req,res,next){
    const {apikey}=req.query
    if (apikey!=="123"){
        return res.status(401).send("Invalid API key")  
    }
    next()
}
app.get('/public',(req,res)=>{
  res.send("this is public")
})
app.get('/private',checkapikey,(req,res)=>{
  res.send("this is private data")
})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});