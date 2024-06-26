// Generated by CodiumAI
const reverseArr = require('./reverseArray')
describe('reverseArr', () => {

    // reverses an array of positive numbers
    it('should reverse an array of positive numbers', () => {
        const input = [1, 2, 3, 4, 5];
        const expectedOutput = [5, 4, 3, 2, 1];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });

    // reverses an empty array
    it('should return an empty array when input is empty', () => {
        const input = [];
        const expectedOutput = [];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });

    // reverses an array of negative numbers
    it('should reverse an array of negative numbers when input contains negative numbers', () => {
        const input = [-1, -2, -3, -4, -5];
        const expectedOutput = [-5, -4, -3, -2, -1];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });

    // reverses an array of mixed positive and negative numbers
    it('should reverse an array of mixed positive and negative numbers when input contains both positive and negative numbers', () => {
        const input = [1, -2, 3, -4, 5];
        const expectedOutput = [5, -4, 3, -2, 1];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });

    // reverses an array of zeroes
    it('should reverse an array of zeroes', () => {
        const input = [0, 0, 0, 0, 0];
        const expectedOutput = [0, 0, 0, 0, 0];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });

    // reverses an array with duplicate elements
    it('should reverse an array with duplicate elements when calling reverseArr', () => {
        const input = [1, 2, 2, 3, 4, 4, 5];
        const expectedOutput = [5, 4, 4, 3, 2, 2, 1];
        expect(reverseArr(input)).toEqual(expectedOutput);
    });
});
