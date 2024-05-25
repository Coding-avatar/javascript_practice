/**
 * Reverses a given string.
 *
 * @param {string} word - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(word) {
    let reverse = '';
    for (let i = 0; i < word.length; i++) {
        reverse = word[i] + reverse;
    }
    return reverse;
}

console.log(reverseString('red')); // Output: 'der'
