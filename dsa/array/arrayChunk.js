/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array<number>} array - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array<Array<number>>} An array containing the chunks.
 */
function chunk(array, size) {
    let result = [];
    if(size>=array.length) return array
    for (let i = 0; i < array.length; i += size) {
        let subArray = array.slice(i, i + size);
        result.push(subArray);
    }
    return result;
}

module.exports = chunk;