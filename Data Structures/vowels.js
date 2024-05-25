/**
 * Counts the number of vowels in a given string.
 *
 * @param {string} str - The input string to count vowels in.
 * @returns {number} The count of vowels in the input string.
 */
function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') count++;
    }
    return count;
}

/**
 * Counts the number of vowels in a given string using regular expressions.
 *
 * @param {string} str - The input string to count vowels in.
 * @returns {number} The count of vowels in the input string.
 */
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels('Hi There')); // Output: 3
console.log(vowels('How are you?')); // Output: 5
console.log(countVowels('Coding money')); // Output: 3
console.log(countVowels('why?')); // Output: 0
