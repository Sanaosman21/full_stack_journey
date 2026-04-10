const express = require('express');
const app = express();
app.use(express.json())
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send("you have "+ kidneyLength +"kidneys")
});
//global catches :help you give the user a better error message "error handling middleware" here 
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something went wrong"
    })
});
const PORT=3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});