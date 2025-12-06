const express=require("express")
const app=express()
const PORT  =3000

// app.get("/users/:id/:username",(req,res)=>{
//     const {id,username}=req.params
//     console.log(`user id is ${id}and Username ${username}`)
//     res.send(`user id is ${id} Username ${username}`)

// });
// app.get("/hello",(req,res)=>{
//     const{name}=req.query;
//     const fname=name||"guest"
//     console.log(`Hello ${fname}`)
//     res.send(`Hello ${fname}`)
// })
// //reponding through json
// app.get("/users/:userid/posts/:postid",(req,res)=>{
//     const{userid,postid}=req.params
//     let result={userid,postid}
//     res.json(result)
// })
//avlidate route params
// app.get("/products/:id",(req,res)=>{
//     const{id}=req.params
//     const numid=Number(id)
//      if (isNaN(numid)){
//         return res.status(400).send("Invalid Product id ")
//     }
//     res.send(`product id:${id}`)
        
//     }
// )
// //filter
// const books = [
//   { id: 1, title: 'Book A', author: 'Alice' },
//   { id: 2, title: 'Book B', author: 'Bob' },
//   { id: 3, title: 'Book C', author: 'Alice' }
// ];
// app.get("/books", (req,res)=>{ 
// const{author}=req.query
// if (author==undefined){
//   return res.json(books)
// }
// const filtered=books.filter(book=>book.author===author)
// res.json(filtered)
// })
// //paginations
// app.get("/items",(req,res)=>{
//   const{page=1,limit=10}=req.query
//   let result={page ,limit}
//   res.json(result)
// })
//students with optional year
const students = [
  { id: 1, name: 'A', year: 1 },
  { id: 2, name: 'B', year: 2 },
  { id: 3, name: 'C', year: 1 }
];
// app.get("/students",(req,res)=>{
//   const{year}=req.query
//   if(year==undefined)
//     { res.json(students)    
//     }
//     const yearnum=Number(year)

//   const filtered=students.filter(s=>s.year===yearnum)
//   res.json(filtered)
// })

app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const idNum = Number(id);                        // '2' -> 2

  const student = students.find(s => s.id === idNum);

  if (!student) {                                  // not found
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);                               // found
});


app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
});
