// Generated by CodiumAI
const rotateLeft = require('./leftRotation')
describe('rotateLeft', () => {

    // rotating an array by 0 positions returns the same array
    it('should return the same array when rotating by 0 positions', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(0, arr);
        expect(result).toEqual(arr);
    });

    // rotating an empty array returns an empty array
    it('should return an empty array when rotating an empty array', () => {
        const arr = [];
        const result = rotateLeft(3, arr);
        expect(result).toEqual([]);
    });

    // rotating an array by its length returns the same array
    it('should return the same array when rotating by its length', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(arr.length, arr);
        expect(result).toEqual(arr);
    });

    // rotating an array by 1 position shifts all elements left by 1
    it('should shift all elements left by 1 when rotating by 1 position', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(1, arr);
        expect(result).toEqual([2, 3, 4, 5, 1]);
    });

    // rotating an array by half its length shifts elements correctly
    it('should shift elements correctly when rotating an array by half its length', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = rotateLeft(arr.length / 2, arr);
        expect(result).toEqual([6, 7, 8, 9, 10, 1, 2, 3, 4, 5]);
    });

    // rotating an array by a number greater than its length works correctly
    it('should rotate the array correctly when rotating by a number greater than its length', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(7, arr);
        expect(result).toEqual([3, 4, 5, 1, 2]);
    });

    // rotating an array with one element returns the same array
    it('should return the same array when rotating an array with one element', () => {
        const arr = [1];
        const result = rotateLeft(1, arr);
        expect(result).toEqual(arr);
    });

    // rotating an array by a negative number should be handled
    it('should handle negative number of positions when rotating array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(-2, arr);
        expect(result).toEqual([4, 5, 1, 2, 3]);
    });
});
