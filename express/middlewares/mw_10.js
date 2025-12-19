const express=require("express")
const app=express()
 //Q4: Body validation middleware (JSON + POST)
// Goal: Validate user data in req.body before creating a user.
app.use(express.json())
function validateuser(req,res,next){
    const{name ,age }=req.body
    const invalid =
    !name ||
    typeof name !== 'string' ||
    age == null ||
    typeof age !== 'number' ||
    age < 18;
    if (invalid){
        return res.status(400).json({ error: 'Invalid user data' });
    }
    next()
}
app.post("/users",validateuser,(req,res)=>{
    res.status(201).json({  
        message:"user created"
    })
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});