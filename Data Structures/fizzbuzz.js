/**
 * Prints numbers from 1 to the given input. For multiples of 3, prints "fizz"; 
 * for multiples of 5, prints "buzz"; and for multiples of both 3 and 5, prints "fizzbuzz".
 *
 * @param {number} input - The upper limit of numbers to print.
 */
function fizzbuzz(input) {
    for (let num = 1; num <= input; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log('fizzbuzz');
        } else if (num % 3 === 0) {
            console.log('fizz');
        } else if (num % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(num);
        }
    }
}

fizzbuzz(30);
