/**
 * Reverses the elements of an array.
 *
 * @param {Array} arr - The input array to reverse.
 * @returns {Array} The reversed array.
 */
function reverseArr(arr) {
    let reverse = [];
    for (let i = arr.length; i > 0; i--) {
        reverse.push(arr[i - 1]);
    }
    return reverse;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArr(arr));

/**
 * Reverses the elements of an array using the built-in reverse method.
 *
 * @param {Array} arr - The input array to reverse.
 * @returns {Array} The reversed array.
 */
function reverse2(arr) {
    let reverseArr = Array.from(arr).reverse();
    return reverseArr;
}

console.log(reverse2([1, 2, 3, 4, 5]));
