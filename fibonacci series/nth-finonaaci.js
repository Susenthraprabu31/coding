/*
Given a positive integer n, the task is to find the nth Fibonacci number.

The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

Example:

Input: n = 2
Output: 1 
Explanation: 1 is the 2nd number of Fibonacci series.


Input: n = 5
Output: 5
Explanation: 5 is the 5th number of Fibonacci series.

*/

function fibonacci(n){
    // Base case: if n is 0 or 1, return n
    if (n <= 1){
        return n;
}
    // Recursive case: sum of the two preceding Fibonacci
    // numbers
    return fibonacci(n-1)+fibonacci(n+1);
}

let n = 5;
let result = fibonacci(n);

console.log(result);