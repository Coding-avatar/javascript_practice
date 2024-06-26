// Generated by CodiumAI
const quickSort = require('./quickSort');
describe('quickSort', () => {

    // sorts an array of integers in ascending order
    it('should sort an array of integers in ascending order', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
        expect(quickSort(input)).toEqual(expectedOutput);
    });

    // handles an empty array
    it('should return an empty array when input is an empty array', () => {
        const input = [];
        const expectedOutput = [];
        expect(quickSort(input)).toEqual(expectedOutput);
    });

    // sorts an already sorted array
    it('should sort an already sorted array', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(quickSort(input)).toEqual(expectedOutput);
    });

    // handles an array with a single element
    it('should handle an array with a single element', () => {
      const input = [5];
      const expectedOutput = [5];
      expect(quickSort(input)).toEqual(expectedOutput);
    });

    // handles an array with duplicate values correctly
    it('should handle an array with duplicate values correctly', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
        expect(quickSort(input)).toEqual(expectedOutput);
    });
});
