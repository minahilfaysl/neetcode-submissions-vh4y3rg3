class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let row = grid.length;
        let col = grid[0].length;
        let perimeter = 0;

        let neighbours = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {

                let isIsland = grid[i][j];

                if (isIsland) {
                    for (let neighbour of neighbours) {
                        let [offsetRow, offsetCol] = neighbour;

                        let cell = 0;
                        if (i + offsetRow >= 0 && j + offsetCol >= 0 && i + offsetRow < row && j + offsetCol < col) {
                            cell = grid[i + offsetRow][j + offsetCol];
                        }
                        if (!cell) perimeter++;
                    }
                }
            }
        }

        return perimeter;
    }
}
