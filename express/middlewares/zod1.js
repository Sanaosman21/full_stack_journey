const express=require("express")
const zod=require("zod")
const app=express()
const schema=zod.array(zod.number());
app.use(express.json())
app.post("/health-checkup",(req,res)=>{
 const kidneys=req.body.kidneys;
 const response =schema.safeParse(kidneys)
 if (!response.success){
    res.status(411).json({
        msg:"input is invalid"
    })
 }else{
        res.send(
    {
        response
    });
}
});
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});