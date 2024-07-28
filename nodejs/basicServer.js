//server codes
// building call http is needed, imported below 
const http = require("http");
const server = http.createServer((req,res)=>{
  res.end("Hello from the server...")
});

//Listen to incoming request from user; 
server.listen(8000, "localhost", ()=>{
  console.log("server is started");
})
