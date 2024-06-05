/**
 * Given a number n, returns an n x n array where the numbers are arranged in a spiral order.
 * 
 * @param {number} n - Number of rows and columns.
 * @returns {Array<Array<number>>} An n x n spiral matrix.
 */
function spiralMatrix(n) {
    // Initialize an empty n x n matrix filled with zeros
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;
    let num = 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Traverse from left to right along the top row
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = num++;
        }
        startRow++;

        // Traverse from top to bottom along the right column
        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = num++;
        }
        endCol--;

        // Traverse from right to left along the bottom row
        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = num++;
        }
        endRow--;

        // Traverse from bottom to top along the left column
        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = num++;
        }
        startCol++;
    }

    return matrix;
}

module.exports = spiralMatrix;