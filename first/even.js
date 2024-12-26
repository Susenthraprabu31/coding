// finding even or odd promblem

// function isEven(number){
//     let remainder = number % 2;
//     if(remainder === 0){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }
// isEven(6);

//Algorithm 2


// Algorithm 2 : Last Digit

function isEven(number){
// 2.Find the last digit of the number
let lastDigit = number % 10;
// 3.Check if the last digit is 0,2,4,6,8 then the number is even
if(lastDigit === 0 || lastDigit ===2 || lastDigit ===4 || lastDigit ===6 || lastDigit ===8){
    console.log('even')
}else{
    // 4.Else if the last digit is 1,3,5,7,9 then the number is odd
    console.log('odd')
} 
}

isEven(6565656);




















//FINDING THE PRIME NUMBERS 

// function isPrime(num){
//     if (num<2)
//         return `It is not a prime number`
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return `It is not a prime number`
//         }
//     }
//     return `It is a prime number`

// }
// console.log(isPrime(5))

//FINDING THE NUMBER IS PALINDROME
// function isPalindrome(num){
// let rem,temp,final = 0
// temp = num
//     while(num >0){
//         rem = num % 10
//         num = parseInt(num/10)
//         final = final *10+rem;
//     }
//     if(temp === final){
//         console.log('palindrome')
//         }else{
//             console.log('not palindrome')
//             }
// }

// isPalindrome(123.)