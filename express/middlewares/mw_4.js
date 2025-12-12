const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());  // JSON body parser middleware

app.post('/users', (req, res) => {
  const user = req.body;  // parsed object
  console.log(user);
  res.status(201).json({ received: user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
