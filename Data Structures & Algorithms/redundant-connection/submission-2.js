class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = Array.from(
            { length: edges.length + 1 },
            (_, i) => i
        );

        const find = (x) => {
            if (parent[x] === x) {
                return x;
            }

            return parent[x] = find(parent[x]);
        };

        const union = (u, v) => {
            const rootU = find(u);
            const rootV = find(v);

            // Already connected → adding this edge creates a cycle
            if (rootU === rootV) {
                return false;
            }

            parent[rootU] = rootV;
            return true;
        };

        for (const [u, v] of edges) {
            if (!union(u, v)) {
                return [u, v];
            }
        }
    }
}