const express=require("express")
const cors = require("cors");

const app=express()
app.use(cors());
app.get("/check", (req,res)=>{
const n=parseInt(req.query.n)

if (isNaN(n)) {
        return res.json({ result: "Please enter a valid number" });
    }
if (n%2==0){
res.json({ result: `${n} is even` });
}
else{
    res.json({ result: `${n} is odd` });
}

})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});