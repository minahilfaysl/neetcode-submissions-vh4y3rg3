class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let neighbours = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let rows = grid.length;
        let cols = grid[0].length;

        function dfs(row, col) {
            // if out of bounds and value = 0
            if (row < 0 ||
            col < 0 ||
            row > rows - 1 ||
            col > cols - 1 ||
            grid[row][col] === 0) {
                return 0;
            }

            // mark cell as SEEN - Very Important!!!!!
            grid[row][col] = 0;

            // go through all neighbours and count
            let sum = 1;
            for (let nb of neighbours) {
                let nbr = nb[0];
                let nbc = nb[1];
                
                sum += dfs(row + nbr, col + nbc);
            }
            // otherwise count area
            return sum;
        }

        let area = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1) {
                    area = Math.max(area, dfs(row, col));
                }
            }
        }

        return area;

    }
}
