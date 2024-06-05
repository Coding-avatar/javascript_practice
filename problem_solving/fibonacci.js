/**
 * Generates the Fibonacci sequence up to the nth number.
 *
 * @param {number} n - The number of terms in the Fibonacci sequence to generate.
 * @returns {Array<number>} An array containing the first n numbers in the Fibonacci sequence.
 */
function fibonacci(n) {
    let number1 = 0;
    let number2 = 1;
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        result.push(number1);
        number2 = number1 + number2; // b = a + b
        number1 = number2 - number1; // a = (a + b) - a
    }
    
    return result;
}

module.exports = fibonacci