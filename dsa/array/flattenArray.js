/**
 * Flattens a nested array structure into a single-level array.
 *
 * @param {Array} arr - The array to flatten.
 * @returns {Array} A new array with all nested arrays flattened.
 */
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

module.exports = flattenArray