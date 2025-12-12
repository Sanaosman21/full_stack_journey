// 2) Example 1: Logger middleware
// Goal: log each request method + URL, then continue.
const express = require('express');
const app = express();
const PORT = 3000;
function logger(req,res,next){
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(logger)

app.get('/hello', (req, res) => {
  res.send('Hello with logger');
});
app.get('/bye', (req, res) => {
  res.send('Bye with logger');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
