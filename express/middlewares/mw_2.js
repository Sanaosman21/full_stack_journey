const express = require('express');
const app = express();
const PORT = 3000;
function addRequestTime(req,res,next){
    req.requestTime=new Date().toISOString();
    next()
}
app.use(addRequestTime)
app.get('/now', (req, res) => {
  res.send(`Current time is ${req.requestTime}`);
});

app.get('/info', (req, res) => {
  res.json({
    path: req.path,
    time: req.requestTime
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});