#!/usr/bin/env node 

//“The OS analyses the shebang and runs the code using Node.js”

//fetch name from command or fallback to world;
const nameArg = (process.argv[2] || 'world'); 

//output the message 
console.log(`Hey ${nameArg}`)