// //without using middle wares
// const express=require("express")
// const app=express()
// app.get("/health-checkup",(req,res)=>{
//     const unsername=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;

//     if (!(username==="sana" && password==="pass")){
//         res.status(400).json({"msg":"something up with your inputs "})
//     }
//     if(kidneyId!=1 || kidneyId !=2)
//     {
//       res.status(400).json({"msg":"something up with your inputs"})
//       }
//        res.json({
//         msg:"your kidney is fine "
//       })
//       })
// const PORT=3000
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });   
//using middle wares 
 const express=require("express")
const app=express()
function usermiddleware(req,res,next){
   const { username, password } = req.query;
  if (username!="sana" && password!="pass"){
    res.status(400).json({"msg":"something up with your input"})
  }else{
    next();
  }
  };
  function kidneymiddleware(req,res,next){
    const { kidneyId } = req.query;
    if(kidneyId!=1 && kidneyId!=2){
      res.status(400).json({
        "msg":"something up with your input"
      });
    }else{
      next();
    }
  };
  app.get("/health-checkup",usermiddleware,kidneymiddleware,(req,res)=>{
    res.send("your are healthy")
  })
  app.get("/kidney-check",usermiddleware,kidneymiddleware,(req,res)=>{
    res.send("your kidney is healthy")
  })
  app.get("/heart-check",usermiddleware,(req,res)=>{
    res.send("your heart is healthy")
  })
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});