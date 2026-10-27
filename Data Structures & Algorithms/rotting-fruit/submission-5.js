class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let queue = [];
        let fresh = 0;
        let minutes = 0;

        // Step 1: Find all rotten oranges and count fresh ones
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        // No fresh oranges to rot
        if (fresh === 0) return 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        // Step 2: BFS
        while (queue.length > 0 && fresh > 0) {
            let size = queue.length;

            // Process one "minute"
            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;

                    // Skip out of bounds
                    if (
                        nr < 0 ||
                        nc < 0 ||
                        nr >= rows ||
                        nc >= cols
                    ) {
                        continue;
                    }

                    // Skip if not a fresh orange
                    if (grid[nr][nc] !== 1) {
                        continue;
                    }

                    // Rot the fresh orange
                    grid[nr][nc] = 2;
                    fresh--;

                    // Add it to the queue
                    queue.push([nr, nc]);
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}