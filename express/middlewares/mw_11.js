//New question: validateProduct middleware
const express=require("express")
const app=express()
app.use(express.json())
function validateProduct(req,res,next){
    const{name,price,inStock}=req.body
    const invalid=
    !name|| typeof name!=="string"||
    price==null||typeof price !=='number'||
    price < 0||
    inStock==null||typeof inStock!=='boolean';
    if (invalid){
        res.status(400).json({
            error:"Invalid product data"
        })
    }
next()
}

app.post("/products",validateProduct,(req,res)=>{
     res.status(201).json({
        message:'Product created'
     })
})
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});