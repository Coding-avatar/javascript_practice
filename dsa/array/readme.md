# Problem Statements
### 1. **Array Chunking**
**Problem**<br>
Write a JavaScript function that splits an array into groups of a specified size and returns them as a two-dimensional array.
```javascript
function chunkArray(arr, size) {
    // Your code here
}

// Test cases
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/dsa/array/arrayChunk.js)

---

### 2. **Dynamic Array**
**Problem**
- Declare a 2-dimensional array **arr** of  empty arrays. All arrays are zero indexed.
- Declare an integer **lastAnswer** and initialize it to **0**.
- There are **2** types of queries, given as an array of strings for you to parse:

1. Query: **1 x y**
    1. Let **idx = ((x ⊕ lastAnswer) % n)**.
    2. Append the integer **y** to **arr[idx]**.
2. Query: 2 x y
    1. Let **idx = ((x ⊕ lastAnswer) % n)**.
    2. Assign the value **arr[idx][y%size(arr[idx])]** to **lastAnswer**.
    3. Store the new value of **lastAnswer** to an answers array.
**Note:** ⊕ is the bitwise XOR operation, which corresponds to the **^** operator in most languages.
Finally, size(arr[idx]) is the number of elements in arr[idx]

**Function Description**
Complete the dynamicArray function below.
dynamicArray has the following parameters:

- int n: the number of empty arrays to initialize in
- string queries[q]: query strings that contain 3 space-separated integers

### Returns

- int[]: the results of each type 2 query in the order they are presented

**Input Format**
The first line contains two space-separated integers, **n**, the size of **arr** to create, and ,**q** the number of queries, respectively.
Each of the **q** subsequent lines contains a query string, **queries[i]**.

***Constraints***

- **1<=n, q<=100000**
- **0<=x, y<=1000000000**
It is guaranteed that query type **2** will never query an empty array or index.

***Sample Input***

```console
2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1
```

***Sample Output***
7
3

**Explanation**
Initial Values:
**n = 2**
**lastAnswer = 0**
**arr[0]** = [ ]
**arr[1]** = [ ]
Query 0: Append **5** to **arr[((0 ⊕ 0) % 2)] = arr[0]**.
**arr[0]** = [5]
**arr[1]** = [ ]

Query 1: Append **7** to **arr[((1 ⊕ 0) % 2)] = arr[1]**.
**arr[0]** = [5]
**arr[1]** = [7]

Query 2: Append **3** to **arr[((0 ⊕ 0) % 2)] = arr[0]**.
**arr[0]** = [5, 3]
**arr[1]** = [7]

Query 3: Assign the value at index **0** of **arr[((1 ⊕ 0) % 2)] = arr[1]** to **lastAnswer**, print **lastAnswer**.
**arr[0]** = [5, 3]
**arr[1]** = [7]
7

Query 4: Assign the value at index **1** of **arr[((1 ⊕ 7) % 2)] = arr[0]** to **lastAnswer**, print **lastAnswer**.
**lastAnswer = 3**
**arr[0]** = [5, 3]
**arr[1]** = [7]
3

[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/dsa/array/dynamicArray.js)

---
### 3. **Flatten a Nested Array**
**Problem**<br>
Write a JavaScript function to flatten a nested array. You must account for varying levels of nesting.
```javascript
function flattenArray(arr) {
    // Your code here
}

// Test cases
console.log(flattenArray([1, [2], [3, [[4]]], 5])); // [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/dsa/array/flattenArray.js)

---

### 4. **Left Rotate an Array**
**Problem**<br>
Write a JavaScript function that performs a left rotation on an array. The function should take two arguments: the number of positions to rotate the array (d) and the array itself (arr).
```javascript
function rotateLeft(d, arr) {
    // Your code here
}

// Test cases
console.log(rotateLeft(2, [1, 2, 3, 4, 5])); // [3, 4, 5, 1, 2]
console.log(rotateLeft(4, [1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotateLeft(6, [1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]
console.log(rotateLeft(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]
console.log(rotateLeft(0, [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/dsa/array/leftRotation.js)

---

### 5. **Reverse an Array**
**Problem**<br>
Write a JavaScript function that takes an array as input and returns a new array that is the reverse of the input array. The function should not modify the original array but should create and return a new reversed array.
```javascript
function reverseArr(arr) {
    // Your code here
}

// Test cases
console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArr(['a', 'b', 'c'])); // ['c', 'b', 'a']
console.log(reverseArr([true, false, true])); // [true, false, true]
console.log(reverseArr([])); // []
console.log(reverseArr([1])); // [1]
```
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/dsa/array/reverseArray.js)