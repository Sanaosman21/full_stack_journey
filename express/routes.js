const express = require('express');
const app = express();
const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Q1: Simple GET text
// Create a route:
// Path: /hello
// Method: GET
// Response: send plain text Hello World using res.send.
app.get("/hello",(req,res)=>{
    res.send("Hello world!")
})
// Q2: Route param
// Create a route:
// Path: /greet/:name
// Method: GET
// Use req.params.name
// Response: Hello <name> (use template string).
// Example:
// GET /greet/Ravi → Hello Ravi
app.get("/greet/:name",(req,res)=>{
    const{name}=req.params
    res.send(`Hello ${name}`)
})
// Q3: Two route params
// Create a route:
// Path: /sum/:a/:b
// Method: GET
// Read a and b from req.params
// Convert them to numbers and send back Sum is <a+b>.
// Example:
// GET /sum/4/6 → Sum is 10
app.get("/sum/:a/:b",(req,res)=>{
    const{a,b}=req.params
    let sum=Number(a)+Number(b)
    res.send(`Sum is ${sum}`)
})
// Q4: Query param with default
// Create a route:
// Path: /welcome
// Method: GET
// Query param: name
// If name present → Welcome <name>
// If missing → Welcome Guest.
// Examples:
// /welcome?name=Sai → Welcome Sai
app.get("/welcome",(req,res)=>{
    const{name}=req.query
    if (name==undefined){
       return res.send(`Welcome Guest`)
    }
    res.send(`Welcome ${name}`)
})
//one more type to write
app.get("/welcome", (req, res) => {
  const { name } = req.query;
  const finalName = name || "Guest";
  res.send(`Welcome ${finalName}`);
});
// Q5: JSON response
// Create a route:
// Path: /status
// Method: GET
// Respond with JSON: { ok: true, message: 'Server is running' } using res.json.
app.get("/status",(req,res)=>{
    res.json({
        ok:true,
        message:"server is running"
    })
})