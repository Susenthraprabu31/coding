//BREAKDOWN
//first store the str in a variable
//then reverse the string using reduce method and store it in another variable
//compare them and true if they match and false if they dont match


function reversestr(str){
    strArray = str.split("");
    return strArray.reduce((rev,char)=> char + rev, "");
}
function plaindromeCheck(str,reversedStr){
    if(str === reversedStr){
        return true
        }
        else
        {
        return false
        }
}

reversedStr = reversestr("malayalam");
result = plaindromeCheck("malayalam",reversedStr);
console.log(result);



//ANOTHER METHOD

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));