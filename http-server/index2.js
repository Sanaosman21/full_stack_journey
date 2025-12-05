//rest api(this thing has been exposed) ,http 
const express = require('express')
const app = express()//intsance of express give you back app object
const bodyParser=require("body-parser")
const port = 3000
app.use(bodyParser.json())
app.get("/route-handler",function(req,res){
  res.json({
    name:"sana",
    age:21
  })
})


app.post('/conversations', (req, res) => {
  console.log(req.body)//shows undeined lets think why
  //req conatins headers,body,query parameters
  //res ->do some learning model 
  //moddlewares
  console.log(req.headers["authorization"])

  res.send({
    msg:"2+2=4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//framework called express whenever request comes basically bunch of bytes somewhere bogy is aslo included but gets ingnored it says im not gonna handle body
//so by using library  called bodyparser so install the body parser
//