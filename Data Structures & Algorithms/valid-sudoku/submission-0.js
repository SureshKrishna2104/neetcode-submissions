class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];

            if (val === '.') continue;

            // Check row
            if (rows[i].has(val)) return false;
            rows[i].add(val);

            // Check column
            if (cols[j].has(val)) return false;
            cols[j].add(val);

            // Check 3x3 box
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(val)) return false;
            boxes[boxIndex].add(val);
        }
    }

    return true;
}
}


