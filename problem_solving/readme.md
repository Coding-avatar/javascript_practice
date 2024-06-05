# Problem Statements

## Dynamic Array

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

[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/dynamicArray.js)

---

## Fizz Buzz

- Write a function that prints numbers from 1 to a given input. For multiples of 3, print "fizz"; for multiples of 5, print "buzz"; and for multiples of both 3 and 5, print "fizzbuzz".
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/fizzbuzz.js)

## Reverse Array

- Write a function that reverses the elements of an array.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/reverseArray.js)

## Rotate Array to the Left

- Write a function that rotates the elements of an array to the left by a given number of positions.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/leftRotation.js)

## Prime Number Checker

- Write a function that checks if a given number is a prime number.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/primeNumber.js)

## Print Steps

- Write a function that prints a staircase pattern with '#' characters, where each row has an increasing number of '#' characters.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/steps.js)

## Flatten Nested Array

- Write a function that flattens a nested array structure into a single-level array.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/flattenArray.js)

## Find Most Frequent Character

- Write a function that finds the most frequently occurring character in a string.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/maxChar.js)

## Check Palindrome

- Write a function that checks if a given string is a palindrome.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/palindrome.js)

## Print Pyramid

- Write a function that generates a pyramid shape with a specified number of levels using hash (#) characters, centered horizontally, and prints it in the console.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/pyramid.js)

## Count Vowels

- Write a function that counts the number of vowels in a given string.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/vowels.js)

## Reverse a String

- Write a function that reverses a given string.
[Solution](https://github.com/Coding-avatar/javascript_practice/blob/main/Data%20Structures/reverse.js)