/**
 * Filters out non-lowercase alphabet characters from a string, sorts the remaining characters,
 * and returns the sorted string.
 *
 * @param {string} str - The input string to process.
 * @returns {string} A new string containing only the sorted lowercase alphabet characters.
 */
function sortFilterLower(str) {
    return str.toLowerCase()
        .split('')
        .filter(letter => letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123)
        .sort()
        .join('');
}

/**
 * Determines if two strings are anagrams of each other, ignoring case and non-alphabet characters.
 *
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
function anagram(str1, str2) {
    let lettersInStr1 = sortFilterLower(str1);
    let lettersInStr2 = sortFilterLower(str2);
    return lettersInStr1 === lettersInStr2;
}
module.exports = {anagram,sortFilterLower}