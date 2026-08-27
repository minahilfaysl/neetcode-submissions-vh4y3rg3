class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // run bfs on rotting fruits and make them rotten
        // return minutes or impossible
        // we can't be sure there's only 1 rotting fruit so multi-source bfs it is

        let ROWS = grid.length;
        let COLS = grid[0].length;
        // add all rotting fruit to queue and count fresh ones
        let q = new Queue()
        let fresh = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    q.enqueue([r, c, 0]); // row, col, time
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        let directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        let minutes = 0;
        while (!q.isEmpty()) {
            let [r, c, time] = q.dequeue();
            minutes = Math.max(minutes, time);

            // one iteration
            for (let [dr, dc] of directions) {
                let nr = r + dr,
                    nc = c + dc;
                
                // fresh fruit that will rot
                if (nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === 1) {
                        // set to rotten
                        grid[nr][nc] = 2;
                        fresh--;
                        // queue again for neighboring fruit
                        q.enqueue([nr, nc, time + 1]);
                }
            }
        }

        return fresh === 0 ? minutes : -1;
    }
}
