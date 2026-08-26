class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const LAND = '1';
        const WATER = '0';
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [0, 1], // right
            [0, -1], // left
            [1, 0], // down
            [-1, 0], // up
        ]

        function dfs(r, c) {
            if (grid[r][c] === WATER) return;

            // mark visited
            grid[r][c] = WATER;
    
            for (let [dr, dc] of directions) {
                let nr = r + dr,
                    nc = c + dc;
                // check in bounds
                if (nr >= 0 && 
                    nc >= 0 && 
                    nr < ROWS && 
                    nc < COLS &&
                    grid[nr][nc] === LAND) {
                    // traverse next cell
                    dfs(nr, nc);
                }
            }
        }

        let islands = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === LAND) {
                    // traverse over all neighbours and mark visited for this island
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
