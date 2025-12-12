// const express=require("express")
// const fs =require("fs")
// const path=require("path")
// const app=express()
// const PORT=3000
// const filesDir=path.join(__dirname,"files");
// app.get("/files",(req,res)=>{
//     fs.readdir(filesDir,(err,files)=>{
//         if (err){
//             return res.status(500).send("server error");
//         }
//         res.json(files);
//     })
// })
// // app.get("/file/:filename",(req,res)=>{
// //     const{filename}=req.params
// //     const filepath=path.join(filesDir,filename)
// //     fs.readFile(filepath,"utf-8",(err,data)=>{
// //         if (err){
// //             if (err.code==='ENOENT'){
// //                 return res.status(404).send("file not found")
// //             }
// //             return res.status(500).send("server error")
// //         }
// //         res.send(data)
// //     })
// // })
// app.get('/file/:filename', (req, res) => {
//   const { filename } = req.params;
//   const filePath = path.join(filesDir, filename);
//   console.log('Requested:', filename);
//   console.log('Full path:', filePath);

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.log('Read error:', err);
//       if (err.code === 'ENOENT') {
//         return res.status(404).send('File not found');
//       }
//       return res.status(500).send('Server error');
//     }

//     console.log('File content length:', data.length);
//     res.send(data);
//   });
// });
// module.exports=app;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT=3000
app.get('/files', function (req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    //to retrurn only txt extension files and ignore rest 
    //use filter on files 
    // const txtfiles=files.filter(name=>name.endsWith('.txt'))
    // res.json(txtfiles);
    res.json(files)
    });
});

app.get('/file/:filename', function (req, res) {
    const filepath = path.join(__dirname, './files/', req.params.filename);

    fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        return res.status(404).send('File not found');
    }
    res.send(data);
    });
});

app.all('/*splat', (req, res) => {
    res.status(404).send('Route not found');
});

module.exports = app;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//Create a new route that returns the size (in bytes) of a given file instead of its content.
app.get("/file-size/:filename",(req,res)=>{
  const filepath=path.join(filesDir, req.params.filename)
  fs.stat(filepath,(err,stats)=>{
    if(err){
        return res.status(404).send("file not found")
    }
    res.json({
        filename:req.params.filename,
        size:stats.size
    })
  })
})



