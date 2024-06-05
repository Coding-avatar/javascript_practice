# Problem Statements

### 1. **Binary Search**

**Problem:**<br>
Write a JavaScript function that performs a binary search on a sorted array of numbers to find the index of a given search term. If the search term is found in the array, the function should return its index. If the search term is not found, the function should return -1.

```javascript
function binarySearch(arr, searchTerm) {
    // Your code here
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([], 3)); // -1
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/search_algo/binarySearch.js)

---

### 2. **Linear Search**

**Problem:**<br>
Write a JavaScript function that performs a linear search on an array of numbers to find the index of a given search term. If the search term is found in the array, the function should return its index. If the search term is not found, the function should return -1.

```javascript
function linearSearch(arr, searchTerm) {
    // Your code here
}

// Test cases
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([], 3)); // -1
console.log(linearSearch([5, 4, 3, 2, 1], 4)); // 1
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/search_algo/linearSearch.js)