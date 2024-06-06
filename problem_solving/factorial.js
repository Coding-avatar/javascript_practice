/**
 * Computes the factorial of a number using an iterative approach.
 *
 * @param {number} n - The number to compute the factorial of.
 * @returns {number} The factorial of the input number.
 */
function factorial(n) {
    if(n<0) return undefined
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial