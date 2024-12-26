/*
promblem : Given an array of intergers, return the indices of the two numbers such that they add up a specific target .you may assume that each input would have exactly one solution and you may not use the same element twice .You can return the answer in any order

input:[2,7,11,15]
target :9
output :[0,1]

input :[3,2,4] 
target :6
output :[1,2]

input:[3,3]
target :6
output :[0,1]
*/

/*
Algorithm :

1. Generate all the possible pairs from the way
2.For each of the generated pair,we should find the sum of the pair 
3.Compare the sum of pair with the given target 
4.If they are equal,then find the indexes of the pair and return the pairs as an array
*/

// const readline = require('readline');

// const rl = readline.createInterface({
//     input:process.stdin,
// });

// const userInput = [];

// rl.on('line',(line)=>{
//     userInput.push(line);
// });

// rl.on('close',()=>{
//     console.log(userInput);
// });