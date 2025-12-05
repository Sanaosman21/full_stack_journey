const fs=require('fs');//bult in node js just have to import that 
//goal to create http server 
const express=require("express");//to import.bring from the internet to you machine how do we do that "npm install express to bring locally to your machine"

//how to create and expose http server 
const app = express()
const port = 3000

// similar to this fs.readFile("path","utf-7",())
app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})


