class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];

        const directions = [
            [0, -1],
            [-1, 0],
            [0, 1],
            [1, 0]
        ];

        // Add all treasures to the queue
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        let distance = 0;

        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 ||
                        nc < 0 ||
                        nr >= rows ||
                        nc >= cols ||
                        grid[nr][nc] !== 2147483647
                    ) {
                        continue;
                    }

                    grid[nr][nc] = distance + 1;
                    queue.push([nr, nc]);
                }
            }

            distance++;
        }
    }
}