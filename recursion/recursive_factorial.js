/**
 * Computes the factorial of a number using a recursive approach.
 *
 * @param {number} n - The number to compute the factorial of.
 * @returns {number} The factorial of the input number.
 */
function factorialUsingRecursion(n) {
    if(n<0) return undefined
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialUsingRecursion(n - 1);
}

module.exports = factorialUsingRecursion