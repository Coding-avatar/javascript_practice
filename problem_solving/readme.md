# Problem Statements

### 1. **Anagram Checker**

**Problem:**<br>
Write a JavaScript function that takes two strings and returns `true` if they are anagrams of each other, and `false` otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```javascript
function isAnagram(str1, str2) {
    // Your code here
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/anagram.js)

---

### 2. **Capitalize Words**

**Problem:**<br>
Write a JavaScript function that takes a string as input and returns a new string where the first letter of each word is capitalized and all other letters are in lowercase. The function should handle leading and trailing spaces and ensure that multiple spaces between words are correctly processed.

```javascript
function capitalize(str) {
    // Your code here
}

// Test cases
console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("  this is a test  ")); // "This Is A Test"
console.log(capitalize("javaScript IS awesome")); // "Javascript Is Awesome"
console.log(capitalize("MULTIPLE     SPACES")); // "Multiple Spaces"
console.log(capitalize("")); // ""
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/capitalize.js)

---

### 3. **Find Factorial**

**Problem:**<br>
Write a JavaScript function that computes the factorial of a given non-negative integer. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. If the input is a negative integer, the function should return undefined.

```javascript
function factorial(n) {
    // Your code here
}

// Test cases
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(-1)); // undefined
console.log(factorial(10)); // 3628800
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/factorial.js)

---

### 4. **Fibonacci Series**

**Problem:**<br>
Write a JavaScript function that generates the first n numbers of the Fibonacci sequence and returns them in an array. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

```javascript
function fibonacci(n) {
    // Your code here
}

// Test cases
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1)); // [0]
console.log(fibonacci(0)); // []
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/fibonacci.js)

---

### 5. **FizzBuzz**

**Problem:**<br>
Write a JavaScript function that prints the numbers from 1 to n (n is a positive integer) but for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
```javascript
function fizzbuzz(input) {
    // Your code here
}

// Test cases
fizzbuzz(15);
// Output:
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/fizzbuzz.js)

---

### 6. **Maximum Frequency**

**Problem:**<br>
Write a JavaScript function that takes a string as input and returns the character that appears most frequently in the string. If there are multiple characters with the same maximum frequency, the function should return the first character encountered in the string with that frequency.

```javascript
function findMaxChar(str) {
    // Your code here
}

// Test cases
console.log(findMaxChar("hello")); // "l"
console.log(findMaxChar("apple")); // "p"
console.log(findMaxChar("banana")); // "a"
console.log(findMaxChar("programming")); // "g"
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/maxChar.js)

---

### 7. **Palindrome Checker**

**Problem:**<br>
Write a JavaScript function that takes a string as an input and returns `true` if the string is a palindrome, and `false` otherwise. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

```javascript
function isPalindrome(str) {
    // Your code here
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/palindrome.js)

---

### 8. **Prime Number Checker**

**Problem:**<br>
Write a JavaScript function that determines whether a given positive integer n is a prime number. A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

```javascript
function isPrime(n) {
    // Your code here
}

// Test cases
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(11)); // true
console.log(isPrime(15485863)); // true
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/primeNumber.js)

---

### 9. **Display Pyramid**

**Problem:**<br>
Write a JavaScript function that prints a pyramid pattern of '#' characters with a height of n rows. The pyramid should be centered horizontally. If n is 0, the function should not print anything.

```javascript
function pyramid(n) {
    // Your code here
}

// Test cases
pyramid(5);
// Output:
//     #
//    ###
//   #####
//  #######
// #########

pyramid(3);
// Output:
//   #
//  ###
// #####

pyramid(0);
// (no output)
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/pyramid.js)

---

### 10. **Reverse Word**

**Problem:**<br>
Write a JavaScript function that takes a string as input and returns a new string with the characters reversed.

```javascript
function reverseString(word) {
    // Your code here
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("12345")); // "54321"
console.log(reverseString("")); // ""
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/reverse.js)

---

### 11. **Spiral Matrix**

**Problem:**<br>
Write a JavaScript function that generates an n x n matrix filled with numbers in spiral order, starting from 1 and spiraling inward.

```javascript
function spiralMatrix(n) {
    // Your code here
}

// Test cases
console.log(spiralMatrix(2));
// Output:
// [
//  [1, 2],
//  [4, 3]
// ]
console.log(spiralMatrix(3));
// Output:
// [
//  [1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]
// ]
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/spiral.js)

---

### 12. **Stairs**

**Problem:**<br>
Write a JavaScript function that prints a staircase pattern of '#' characters with a height of n rows. Each row of the staircase should have increasing number of '#' characters, starting from 1 in the first row.

```javascript
function steps(n) {
    // Your code here
}

// Test cases
steps(5);
// Output:
// #
// ##
// ###
// ####
// #####
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/steps.js)

---

### 13. **Count Vowels**

**Problem:**<br>
Write a JavaScript function that counts the number of vowels (a, e, i, o, u) in a given string str. The function should return the count of vowels found in the string.

```javascript
function vowels(str) {
    // Your code here
}

// Test cases
console.log(vowels("hello")); // 2
console.log(vowels("world")); // 1
console.log(vowels("aeiou")); // 5
console.log(vowels("")); // 0
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/problem_solving/vowels.js)