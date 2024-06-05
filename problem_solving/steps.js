/**
 * Prints a staircase pattern with '#' characters, where each row has an increasing number of '#' characters.
 *
 * @param {number} n - The number of rows in the staircase.
 */
function steps(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

module.exports = steps