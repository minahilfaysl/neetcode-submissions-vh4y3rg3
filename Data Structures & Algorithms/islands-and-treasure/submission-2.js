class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // multi-source BFS
        // add 0s to queue first
        // then traverse

        let ROWS = grid.length;
        let COLS = grid[0].length;

        let q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.enqueue([grid[r][c], r, c]);
                }
            }
        }

        let directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        // Now BFS
        while(!q.isEmpty()) {
            // update all infinity cols with distances
            let [distance, r, c] = q.dequeue();

            for (let [dr, dc] of directions) {
                let nr = r + dr, 
                    nc = c + dc;

                if (nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === 2147483647) {
                        // add to queue, and update with distance
                        grid[nr][nc] = distance + 1;
                        q.enqueue([grid[nr][nc], nr, nc]);
                    }
            }
        } 
    }
}
