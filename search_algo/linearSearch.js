/**
 * Takes an array and a search term as an input and returns the position in which the search term in found first
 * Returns -1 if the search term is not found or the input array is empty
 * @param {number[]}  arr -  Input array of numbers
 * @param {number} searchTerm - element to be searched in the given array
*/

function linearSearch(arr,searchTerm){
    if(arr.length===0) return -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===searchTerm) return i;
    }
    return -1;
}

module.exports = linearSearch;