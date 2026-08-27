class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROWS = grid.length,
            COLS = grid[0].length,
            fresh = 0;
        
        let q = new Queue();
        // count fresh fruit and add rotten to queue

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    q.enqueue([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        let directions = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0]
        ];

        // now BFS to turn all rotten
        let minutes = 0; // 1 BFS iteration = 1 minute
        while (!q.isEmpty() && fresh > 0) {
            let size = q.size();

            for (let i = 0; i < size; i++) {
                let [r, c] = q.dequeue();

                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;

                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < ROWS &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        fresh--;
                        q.enqueue([nr, nc]);
                    }
                }
            }

            minutes++;
        }
        
        return fresh > 0 ? -1 : minutes;
    }
}
