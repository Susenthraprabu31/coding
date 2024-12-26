function findGCD(num1,num2){
    while(true){
        //find the remainder
        rem = num1 % num2;
        if (rem === 0)break;
        //reassign the values of num1 and num2
        num1=num2;
        num2=rem;
    }
    //what we have in num2 in GCD
    return num2;
}
let num1 = 10;
let num2 = 5;

console.log(findGCD(num1,num2))