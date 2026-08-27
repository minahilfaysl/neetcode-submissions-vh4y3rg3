class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // surround = same as board, with true and false,
        // if X, then true,
        // if O on the border and connected, then false,

        // then update board, based on surround board

        const ROWS = board.length;
        const COLS = board[0].length;

        let surrounded = Array.from(
            { length: ROWS },
            () => Array(COLS).fill(true)
        );

        function dfs(r, c) {
            surrounded[r][c] = false;

            let directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0]
            ]

            for (let [dr, dc] of directions) {
                let nr = r + dr,
                nc = c + dc;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS &&
                    board[nr][nc] === "O" && surrounded[nr][nc] === true) {
                    dfs(nr, nc);
                }
            }
        }

        // Row border
        for (let c = 0; c < COLS; c++) {
            // first row
            if (board[0][c] === "O") {
                // mark false, and traverse
                dfs(0, c)
            }
            // last row
            if (board[ROWS - 1][c] === "O") {
                dfs(ROWS - 1, c)
            }
        }

        // Col border
        for (let r = 0; r < ROWS; r++) {
            // first col
            if (board[r][0] === "O") {
                // mark false, and traverse
                dfs(r, 0)
            }
            // last col
            if (board[r][COLS - 1] === "O") {
                dfs(r, COLS - 1)
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (surrounded[r][c] === true) {
                    board[r][c] = "X";
                }
            }
        }
    }
}
