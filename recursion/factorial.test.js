const factorialUsingRecursion = require('./factorial')
describe('factorial using recursion', () => {

    // computes factorial of positive integers correctly
    it('should return the correct factorial for positive integers', () => {
        expect(factorialUsingRecursion(5)).toBe(120);
        expect(factorialUsingRecursion(0)).toBe(1);
        expect(factorialUsingRecursion(1)).toBe(1);
    });

    // returns undefined for negative integers
    it('should return undefined for negative integers', () => {
        expect(factorialUsingRecursion(-1)).toBeUndefined();
        expect(factorialUsingRecursion(-5)).toBeUndefined();
    });

    // returns 1 for factorial of 0
    it('should return 1 for factorial of 0', () => {
        expect(factorialUsingRecursion(0)).toBe(1);
    });
});