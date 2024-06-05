/**
 * Converts the first letter of each word in a string to uppercase and the rest to lowercase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The input string with each word capitalized.
 */
function capitalize(str) {
    if(str.length<=0) return ''; 
    let words = str.trim().split(' ');
    let result = '';
    
    for (let word of words) {
        let capitalizedWord = word.toUpperCase().slice(0, 1) + word.toLowerCase().slice(1);
        result += capitalizedWord + ' ';
    }    
    return result.trim();
}

module.exports = capitalize