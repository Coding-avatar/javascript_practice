/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} input - The string to check for palindrome.
 * @returns {boolean} True if the input string is a palindrome, false otherwise.
 */
function checkPalindrome(input) {
    const reverseInput = Array.from(input.split('')).reverse().join('');
    return input.toLowerCase() === reverseInput.toLowerCase();
}

module.exports = checkPalindrome;