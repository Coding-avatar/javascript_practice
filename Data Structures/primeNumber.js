/**
 * Checks if a given number is a prime number.
 *
 * @param {number} n - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));      // Output: true
console.log(isPrime(101));    // Output: true
console.log(isPrime(10061));  // Output: true
console.log(isPrime(99));     // Output: false
