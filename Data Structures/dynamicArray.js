/**
 * Processes a series of queries on a dynamic array and returns results of specific queries.
 *
 * @param {number} n - The number of sub-arrays to initialize.
 * @param {Array<Array<number>>} queries - A 2D array where each sub-array represents a query.
 * @returns {Array<number>} The results of all type-2 queries.
 */
function dynamicArray(n, queries) {
    let lastAnswer = 0;
    let arr = [];
    let answers = [];

    // Initialize n empty sub-arrays
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }

    // Process each query
    queries.forEach((row) => {
        let queryType = row[0];
        let x = row[1];
        let y = row[2];
        let idx = (x ^ lastAnswer) % n;

        if (queryType === 1) {
            arr[idx].push(y);
        } else if (queryType === 2) {
            let value = arr[idx][y % arr[idx].length];
            lastAnswer = value;
            answers.push(Number(lastAnswer));
        }
    });

    return answers;
}

let n = 2;
let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ];
console.log(dynamicArray(n, queries));
//https://www.hackerrank.com/challenges/dynamic-array/problem