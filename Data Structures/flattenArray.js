/**
 * Flattens a nested array structure into a single-level array.
 *
 * @param {Array} arr - The array to flatten.
 * @returns {Array} A new array with all nested arrays flattened.
 */
const flattenArray = (arr) => arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);

console.log(flattenArray([1, 2, [3, 4, [5, 6, [7]]], [8, [9, 10], [11]], 12]));
