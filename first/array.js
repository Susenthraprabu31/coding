// let numbers = [2,3,4,5];

// console.log(numbers[4]);

// console.log(numbers.length);

//to get or access from the last digit
// console.log(numbers[numbers.length-1]);

// numbers.push(7);
// numbers.pop();

//to the begining of an array
// numbers.unshift(24)
// numbers.unshift(15)

//remove element from the begining of an array
// numbers.shift();
// numbers.shift();

//add or remove an element anywhere from the array
// numbers.splice()
// numbers.splice ()



// console.log(numbers)
// console.log(numbers.indexOf(1));

// console.log(numbers.slice(1,))

// console.log(numbers)

//to square each of the number in numbers array
//[2,3,4,5]
//without map method
// let squares =[]

// for (let index=0;index<numbers.length;index++){

//     squares.push(numbers[index] **2)

// }

// console.log(squares)

//with map method 

// function squares(value){
//     return value **2;

// }
// console.log(numbers.map(squares));

// console.log(numbers.map(function(value){
//     return value **2
// }))

// console.log(numbers.map((value)=>{
//     return value **2
// }))


//to find the sum of all the numbers 
//without reduce method

// let sum = 0;

// for (let index = 0;index<numbers.length;index++){
//     sum = sum +numbers[index];
// }
// console.log(sum)


//PROBLEM : GIVEN AN ARRAY REMOVE THE DUPLICATES FROM THE ARRAY 
//input :[2,3,4,5,2,3,5,6,7,7,4,3]
//output :[2,3,4,5,6,7]

let numbers =[2,3,4,5,2,3,5,6,7,7,4,3];

//method1:coverting the array to a set datastrucutre
console.log(Array.from(new Set(numbers)));