function reverseString(str){
    //string to array = "for .... of"
    //Step1:Initaliaze a empty string to bulid a reverse string
    let reversed = "";

    //Step 2:Itretae through the characters of input string in reverse order
    for(let character of str){
        //Step 3 : Append the each character to each string
        reversed = character + reversed;
    }
    //Step 4 : Return the reverse string
    return reversed;
}
console.log(reverseString("hello"))
console.log(reverseString("apple"))
console.log(reverseString("greetings!"))