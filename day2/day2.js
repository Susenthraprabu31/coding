//Given a string , return a new string with the reversed order of characters 

//EXAMPLES

//reverse ('apple')= 'elppa'
//reverse ('hello')= 'olleh'

function reversestring(str){
    //Step1: Convert string into array
    const strArray = str.split("")
    //Step2: reverse the array
    const reversedarray = strArray.reverse();
    //Step3:Join the array back into string
    const reversestring = reversedarray.join("");
    //Step4: Return the reversedString
    return reversestring;
}
console.log(reversestring("apple"))
console.log(reversestring("hello"))
console.log(reversestring("greetings!"))