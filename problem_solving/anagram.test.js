// Generated by CodiumAI
const source = require('./anagram.js')
const anagram = source.anagram
const sortFilterLower = source.sortFilterLower
describe('anagram', () => {

    // returns true for anagrams with same letters in different order
    it('should return true when strings are anagrams with same letters in different order', () => {
        const str1 = 'listen';
        const str2 = 'silent';
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles empty strings correctly
    it('should return true when both strings are empty', () => {
        const str1 = '';
        const str2 = '';
        expect(anagram(str1, str2)).toBe(true);
    });

    // ignores case differences between strings
    it('should ignore case differences between strings', () => {
        const str1 = 'LiStEn';
        const str2 = 'sIlEnT';
        expect(anagram(str1, str2)).toBe(true);
    });

    // ignores non-alphabet characters in both strings
    it('should ignore non-alphabet characters in both strings', () => {
        const str1 = 'Li!s@ten';
        const str2 = 'S!i@lent';
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles strings with only non-alphabet characters
    it('should return true when both strings have only non-alphabet characters', () => {
        const str1 = '!@#$%^&*()';
        const str2 = '!@#$%^&*()';
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles strings with repeated characters
    it('should return true when strings are anagrams with repeated characters', () => {
        const str1 = 'hello';
        const str2 = 'ollhe';
        expect(anagram(str1, str2)).toBe(true);
    });

    // returns false for non-anagrams with different letters
    it('should return false when strings are not anagrams with different letters', () => {
        const str1 = 'hello';
        const str2 = 'world';
        expect(anagram(str1, str2)).toBe(false);
    });

    // handles very long strings efficiently
    it('should efficiently handle very long strings', () => {
        const str1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000000);
        const str2 = 'zyxwvutsrqponmlkjihgfedcba'.repeat(1000000);
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles strings with accented characters
    it('should return true when strings are anagrams with accented characters', () => {
        const str1 = 'Café';
        const str2 = 'éfac';
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles strings with spaces
    it('should return true when strings are anagrams with spaces', () => {
        const str1 = 'hello world';
        const str2 = 'world hello';
        expect(anagram(str1, str2)).toBe(true);
    });

    // handles strings with uppercase letters only
    it('should return true when strings are anagrams with uppercase letters only', () => {
        const str1 = 'LISTEN';
        const str2 = 'SILENT';
        expect(anagram(str1, str2)).toBe(true);
    });
});

describe('sortFilterLower', () => {

    // filters out non-lowercase alphabet characters
    it('should filter out non-lowercase alphabet characters', () => {
        const input = 'a1b2c3!@#';
        const expectedOutput = 'abc';
        expect(sortFilterLower(input)).toBe(expectedOutput);
    });

    // handles empty strings without errors
    it('should return an empty string when input is empty', () => {
        const input = '';
        const expectedOutput = '';
        expect(sortFilterLower(input)).toBe(expectedOutput);
    });

    // sorts lowercase alphabet characters in ascending order
    it('should sort lowercase alphabet characters in ascending order', () => {
        const input = 'cbad';
        const expectedOutput = 'abcd';
        expect(sortFilterLower(input)).toBe(expectedOutput);
    });

    // handles strings with uppercase letters and converts them to lowercase
    it('should convert uppercase letters to lowercase', () => {
        const input = 'AbCDeF';
        const expectedOutput = 'abcdef';
        expect(sortFilterLower(input)).toBe(expectedOutput);
    });

    // handles strings with repeated characters correctly
    it('should handle strings with repeated characters correctly', () => {
        const input = 'aabbcc';
        const expectedOutput = 'aabbcc';
        expect(sortFilterLower(input)).toBe(expectedOutput);
    });
});