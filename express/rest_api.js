const express=require("express")
const app=express()
const users=require("./MOCK_DATA.json")
const PORT =8000
//rest api
app.get("/api/users",(req,res)=>{
    return res.json(users)
})
app.get("/users",(req,res)=>{
    const html=
    `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})
//GET /api/users/particular user
app.route("/api/users/:id").get((req,res) => {
     const id=Number(req.params.id);
     const user =users.find((user)=>user.id===id);
     return res.json(user)
})
.patch((req,res)=>{
    return res.json({status:'pending'})
})
.delete((req,res)=>{
    return res.json({status:'pending'})
});

app.post("/api/users",(req,res)=>{
return res.json({status:"pending"});
});



app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});