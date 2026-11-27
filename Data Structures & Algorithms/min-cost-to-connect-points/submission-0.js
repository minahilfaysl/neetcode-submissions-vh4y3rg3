class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length;

        let visited = new Set();
        let minDist = Array(n).fill(Infinity);

        minDist[0] = 0;

        let totalCost = 0;

        for (let i = 0; i < n; i++) {

            // Find the unvisited point with the minimum distance
            let minCost = Infinity;
            let curr = -1;

            for (let j = 0; j < n; j++) {
                if (!visited.has(j) && minDist[j] < minCost) {
                    minCost = minDist[j];
                    curr = j;
                }
            }

            // Add this point to the MST
            visited.add(curr);
            totalCost += minCost;

            // Update distances to all unvisited points
            for (let j = 0; j < n; j++) {
                if (!visited.has(j)) {
                    let distance =
                        Math.abs(points[curr][0] - points[j][0]) +
                        Math.abs(points[curr][1] - points[j][1]);

                    minDist[j] = Math.min(minDist[j], distance);
                }
            }
        }

        return totalCost;
    }
}
