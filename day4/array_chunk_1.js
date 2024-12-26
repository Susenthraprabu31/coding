//Aglorithm

//1.Initalize an empty result array,to hold the subarray(chunks)
//2.Loop through the given I/P array,slice it into subarrays of the given chunk size
//3.Result array <-- chunks
//4.if there is any left over less than the givem chumk size, it will 


// GIven an array and chunk size,divide the array into many subarrays
//where each subarray is of the provided size
//chunk([1,2,3,4],2)--->[[1,2],[3,4]]
//chunk([1,2,3,45],2)---->[[1,2],[3,4],[5]]
//chunk([1,2,3,4,5,6,7,8,9],3)---->[[1,2,3],[4,5,6],[7,8,9]]

function chunk(array,size){
//Step1: Initialize an empty array to store 
    const result = [];
//Step2:Iterate through the input array
for(let i = 0;i<array.length;i+=size){
//Step3: Extract a subarray of the specified array 
        result.push(array.slice(i,i+size))
    }
//Step4: Return the result array containing the 
    return result;
}


console.log(chunk([1,2,3,4],2));
console.log(chunk([1,2,3,4,5],2));
console.log(chunk([1,2,3,4,5,6,7,8,9],3));
