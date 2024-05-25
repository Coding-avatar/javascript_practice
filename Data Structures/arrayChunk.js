/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array} array - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array<Array>} An array containing the chunks.
 */
function chunk(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let subArray = array.slice(i, i + size);
        result.push(subArray);
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7]]
