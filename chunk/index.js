/** --- Directions
* Given an array and chunk size, divide the array into many subarrays
* where each subarray is of length size
* --- Examples
* chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
* chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
* chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
* chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
* chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/** IMPLEMENTATION USING FOR OF LOOP
* 1. create empty array to hold chunks called "chunked"
* 2. for each element in the unchunked array
*      retrieve the last element in "chunked"
*      if last element does not exist, or if its length is equal to chunk size
*          push new chunk into "chunked" with the current element
*      else add the current element into the chunk
*/

function chunk1(array, size) {
   const chunked = [];
   for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
       chunked.push([element]); 
    } else {
        last.push(element);
    }
   } 
   return chunked;
}


/** IMPLEMENTATION USING SLICE + WHILE LOOP
* 1. create empty "chunked" array
* 2. create 'index' start at 0
* 3. while index is less than array.length     
*      push a slie of length 'size' from 'array' into 'chunked'
*      add 'size' to 'index'
*/
function chunk2(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
 }

 module.exports = {
     chunk1, chunk2
 }

