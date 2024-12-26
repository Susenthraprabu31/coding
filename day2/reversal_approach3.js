function reverseString(str){
//Step1: Covert String Into An Array
const strArray = str.split("");
// Step 2 : Use Reduce() Method to build the reversed string and return 
return strArray.reduce((reversed,character)=>character+reversed,"");
//syntax:array.reduce((accumlator,currentvalue)=>{logic},initalvalue);\
//reversed(accumaltor):The reversed string built so far 
//character (currentvalue):The current character (element)being processed
//initalvalue:An empty string'' to start the eversed string
}
console.log(reverseString("susenthraprabu"))