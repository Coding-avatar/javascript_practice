/**
 * Reverses the elements of an array.
 *
 * @param {Array<number>} arr - The input array to reverse.
 * @returns {Array<number>} The reversed array.
 */
function reverseArr(arr) {
    let reverse = [];
    for (let i = arr.length; i > 0; i--) {
        reverse.push(arr[i - 1]);
    }
    return reverse;
}

module.exports = reverseArr;