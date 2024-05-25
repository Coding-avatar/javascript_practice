/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} input - The string to check for palindrome.
 * @returns {boolean} True if the input string is a palindrome, false otherwise.
 */
function checkPalindrome(input) {
    let reverseInput = Array.from(input.split('')).reverse().join('');
    return input === reverseInput;
}

console.log(checkPalindrome('abcba')); // Output: true
