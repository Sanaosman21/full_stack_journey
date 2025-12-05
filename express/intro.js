const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/search', (req, res) => {
    let query=req.query.q
    let name=req.query.name
    let location=req.query.location
  res.send('you searched for:' + query)
})

// app.post('/', (req, res) => {
//     console.log(req.body.name)
//   res.send('Hello World! this is post request')
// })
// app.delete('/', (req, res) => {
//   res.send('Hello World! this is delete request')
// })
// app.put('/', (req, res) => {
//   res.send('Hello World! this is put request')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
