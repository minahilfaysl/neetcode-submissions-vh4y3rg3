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

                        let newRowOffset = i + offsetRow;
                        let newColOffset = j + offsetCol;

                        let cell = 0;
                        if (
                            newRowOffset >= 0 
                            && newColOffset >= 0 
                            && newRowOffset < row 
                            && newColOffset < col
                        ) {
                            cell = grid[newRowOffset][newColOffset];
                        }
                        if (!cell) perimeter++;
                    }
                }
            }
        }

        return perimeter;
    }
}
