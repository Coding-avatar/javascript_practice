/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} input - The string to check for palindrome.
 * @returns {boolean} True if the input string is a palindrome, false otherwise.
 */
function isPalindrome(input) {
    const filteredInput = input.match(/[a-zA-Z0-9]+/g);
    const result = filteredInput? filteredInput.join('') : '';
    const reverseInput = Array.from(result.split('')).reverse().join('');
    return result.toLowerCase() === reverseInput.toLowerCase();
}

module.exports = isPalindrome;