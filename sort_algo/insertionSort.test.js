// Generated by CodiumAI
const insertionSort = require('./insertionSort');
describe('insertionSort', () => {

    // sorts an array of positive integers
    it('should sort an array of positive integers', () => {
        const input = [5, 3, 8, 4, 2];
        const expectedOutput = [2, 3, 4, 5, 8];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });

    // handles an empty array
    it('should return an empty array when input is empty', () => {
        const input = [];
        const expectedOutput = [];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });

    // sorts an array of negative integers
    it('should sort an array of negative integers', () => {
        const input = [-5, -3, -8, -4, -2];
        const expectedOutput = [-8, -5, -4, -3, -2];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });

    // maintains the order of an already sorted array
    it('should maintain the order of an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });

    // sorts an array with duplicate elements
    it('should sort an array with duplicate elements', () => {
        const input = [5, 3, 8, 4, 2, 3, 5];
        const expectedOutput = [2, 3, 3, 4, 5, 5, 8];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });

    // sorts an array with a single element
    it('should sort an array with a single element', () => {
        const input = [5];
        const expectedOutput = [5];
        expect(insertionSort(input)).toEqual(expectedOutput);
    });
});
