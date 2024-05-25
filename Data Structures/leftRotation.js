/**
 * Rotates the elements of an array to the left by a given number of positions.
 *
 * @param {number} d - The number of positions to rotate the array to the left.
 * @param {Array} arr - The array to rotate.
 * @returns {Array} A new array with the elements rotated to the left.
 */
function rotateLeft(d, arr) {
    let newArr = Array.from(arr.slice(d));
    newArr.push(...arr.slice(0, d));
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(rotateLeft(2, arr)); // Output: [3, 4, 5, 6, 1, 2]
