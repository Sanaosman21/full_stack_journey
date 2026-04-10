const express = require('express')
const app = express()
const port = 3000
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.post('/', (req, res) => {
console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
///how to link frontend and backend 
//using fetch(web api)