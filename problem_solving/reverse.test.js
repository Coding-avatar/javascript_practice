// Generated by CodiumAI
const reverseString = require('./reverse')
describe('reverseString', () => {

    // reverses a regular string correctly
    it('should reverse the string when given a regular string', () => {
        const input = 'hello';
        const expectedOutput = 'olleh';
        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    });

    // handles an empty string correctly
    it('should return an empty string when given an empty string', () => {
        const input = '';
        const expectedOutput = '';
        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    });

    // handles a string with spaces correctly
    it('should reverse the string with spaces when given a string with spaces', () => {
        const input = 'hello world';
        const expectedOutput = 'dlrow olleh';
        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    });

    // handles a string with punctuation correctly
    it('should reverse the string when given a string with punctuation', () => {
        const input = 'hello, world!';
        const expectedOutput = '!dlrow ,olleh';
        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    });

    // handles a string with mixed case letters correctly
    it('should reverse the string with mixed case letters when given a string', () => {
        const input = 'HeLlO';
        const expectedOutput = 'OlLeH';
        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    });
});
