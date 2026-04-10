const express = require('express');
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); // go to next middleware / route
});

app.get('/hello', (req, res) => {
  res.send('Hello with logging');
});

const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});
