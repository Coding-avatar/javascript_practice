/**
 * Takes an array and a search term as an input and returns the position in which the search term is found first.
 * Returns -1 if the search term is not found or the input array is empty.
 * @param {number[]}  arr - Input array of numbers.
 * @param {number} searchTerm - Element to be searched in the given array.
 * @returns {number} Index of the search term or -1 if not found.
 */

function binarySearchUsingRecursion(arr,searchTerm,startIdx=0,endIdx=arr.length-1){
    if (startIdx > endIdx) return -1;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    if (arr[middleIdx] === searchTerm) return middleIdx;

    if (arr[middleIdx] < searchTerm) {
        return binarySearchUsingRecursion(arr, searchTerm, middleIdx + 1, endIdx);
    } else {
        return binarySearchUsingRecursion(arr, searchTerm, startIdx, middleIdx - 1);
    }
}

module.exports = binarySearchUsingRecursion;