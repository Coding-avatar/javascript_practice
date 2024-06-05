/**
 * Checks if a given number is a prime number.
 *
 * @param {number} n - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
    if (n < 2) return false;
    if(!Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
module.exports = isPrime
