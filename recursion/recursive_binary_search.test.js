// Generated by CodiumAI
const binarySearchUsingRecursion = require('./recursive_binary_search')
describe('binarySearchUsingRecursion', () => {
    // returns correct index when searchTerm is present in the middle of the array
    it('should return correct index when searchTerm is present in the middle of the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const searchTerm = 3;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(2);
    });

    // returns -1 for an empty array
    it('should return -1 for an empty array', () => {
        const arr = [];
        const searchTerm = 3;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(-1);
    });

    // returns correct index when searchTerm is present at the start of the array
    it('should return correct index when searchTerm is present at the start of the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const searchTerm = 1;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(0);
    });

    // returns correct index when searchTerm is present at the end of the array
    it('should return correct index when searchTerm is present at the end of the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const searchTerm = 5;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(4);
    });

    // returns -1 when searchTerm is not present in the array
    it('should return -1 when searchTerm is not present in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const searchTerm = 6;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(-1);
    });

    // handles arrays with multiple elements correctly
    it('should return correct index when searchTerm is present in the middle of the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const searchTerm = 3;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(2);
    });

    // handles arrays of length 2 correctly
    it('should return correct index for arrays of length 2', () => {
        const arr = [1, 2];
        const searchTerm = 1;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(0);
    });

    // handles arrays of length 2 correctly (searchTerm at end)
    it('should return correct index for arrays of length 2 with searchTerm at end', () => {
        const arr = [1, 2];
        const searchTerm = 2;
        const result = binarySearchUsingRecursion(arr, searchTerm);
        expect(result).toBe(1);
    });
});
