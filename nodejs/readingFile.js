const express = require("express");
const fs = require("fs");

const app = express();

app.get("/",(req,res) => {

  // reading file over here: 
  fs.readFile("./data.txt","utf-8",(err,data) => {
    if(err) res.send("There is an error in the file")
    res.send(data);
  })

  
})

app.listen(8000,() => {
  console.log("server connected successfully!");
})