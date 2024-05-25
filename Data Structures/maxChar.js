/**
 * Finds the most frequently occurring character in a string.
 *
 * @param {string} str - The input string to search for the most frequently occurring character.
 * @returns {string} The character that occurs the most frequently in the input string.
 */
function findMaxChar(str) {
    let charMap = {};
    let maxChar = '';
    let max = 0;
    
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    for (const [key, value] of Object.entries(charMap)) {
        if (value > max) {
            max = value;
            maxChar = key;
        }
    }
    
    return maxChar;
}

console.log(findMaxChar('adidas')); // Output: 'a'
