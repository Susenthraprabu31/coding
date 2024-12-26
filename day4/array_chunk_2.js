//1.Start with an empty array to store the subarray
//2.Iterate through the input array (original array)
//3.check the last chunk
//4.if the last chunk does not exists or its length 
//5.Create a new chunk and add it to the result array 
//6.Push the current element into the last chunk 
//7.return the result array

function chunk(array,size){
    let chunked = [];

    for (let i = 0; i<array.length; i++){
        const lastChunk = chunked[chunked.length - 1];
       
        if(!lastChunk || lastChunk.length === size){
            chunked.push([array[i]]);
            }else{
         lastChunk.push(array[i]);
        }
    }
    return chunked;
}


console.log(chunk([1,2,3,4],2));
console.log(chunk([1,2,3,4,5],2));
console.log(chunk([1,2,3,4,5,6,7,8,9],3));