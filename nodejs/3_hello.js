#!/usr/bin/env node

//fetch name from command argument, environment or fallback to world; 
//“Linux and macOS devices define a USER variable, while Windows sets USERNAME.”

const nameArg = capi(process.argv[2] || process.env.USER || process.env.USER-NAME || 'world');

console.log(`hello ${nameArg}`); 

//function capi capitalise the first letter in the str. 
function capi(str) {
    return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}