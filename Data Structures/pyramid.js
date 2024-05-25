/**
 * Generates a pyramid shape with a specified number of levels using hash (#) characters,
 * centered horizontally, and prints it in the console.
 *
 * @param {number} n - The number of levels in the pyramid.
 */
function pyramid(n) {
    if (n === 0) return;
    
    for (let row = n; row >= 1; row--) {
        let line = '';
        let numberOfSpaces = row - 1;
        
        for (let col = 1; col <= n * 2 - 1; col++) {
            if (col <= numberOfSpaces || col >= n * 2 - numberOfSpaces) {
                line += ' ';
            } else {
                line += '#';
            }
        }
        console.log(line);
    }
}

pyramid(4);