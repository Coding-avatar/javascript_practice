/**
 * Takes an array and a search term as an input and returns the position in which the search term is found first.
 * Returns -1 if the search term is not found or the input array is empty.
 * @param {number[]}  arr - Input array of numbers.
 * @param {number} searchTerm - Element to be searched in the given array.
 * @returns {number} Index of the search term or -1 if not found.
 */

function binarySearch(arr, searchTerm) {
    if (arr.length === 0) return -1;
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
        const middleIdx = Math.floor((startIdx + endIdx) / 2);
        if (arr[middleIdx] === searchTerm) return middleIdx;
        if (searchTerm < arr[middleIdx]) {
            endIdx = middleIdx - 1;
        } else {
            startIdx = middleIdx + 1;
        }
    }
    return -1;
}

module.exports = binarySearch;
