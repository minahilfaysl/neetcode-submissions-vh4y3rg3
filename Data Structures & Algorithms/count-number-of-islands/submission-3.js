class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let islands = 0;

        let directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        // count all the ones, and make the neighbours 0 as visited
        function dfs(r, c) {
            if (grid[r][c] === "0") return;

            // mark visited
            grid[r][c] = "0";

            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                if (nr >= 0 && 
                    nc >= 0 && 
                    nr < rows && 
                    nc < cols &&
                    grid[nr][nc] === "1") {
                    // traverse next cell
                    dfs(nr, nc);
                }
            }            

        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    // traverse and mark all neighbouring 1s as 0
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
