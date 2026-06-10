class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;
        let seenBoard = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        function dfs(r, c, index) {
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                board[r][c] !== word[index] ||
                seenBoard[r][c]
            ) {
                return false;
            }

            if (index === word.length - 1) {
                return true;
            }

            seenBoard[r][c] = true;

            let found =
                dfs(r + 1, c, index + 1) ||
                dfs(r - 1, c, index + 1) ||
                dfs(r, c + 1, index + 1) ||
                dfs(r, c - 1, index + 1);

            seenBoard[r][c] = false;

            return found;
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}