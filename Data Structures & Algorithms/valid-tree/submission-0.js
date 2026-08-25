class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }

        const adj = Array.from(
            { length: n },
            () => []
        );

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Set();

        function dfs(node, parent) {
            // If we've already visited this node,
            // and it isn't the node we just came from,
            // then we found a cycle
            if (visited.has(node)) return false;

            visited.add(node);

            for (let child of adj[node]) {
                // Ignore the edge back to the parent
                if (child === parent) continue;

                if (!dfs(child, node)) return false;
            }

            return true;
        }

        // Start DFS from one node
        if (!dfs(0, -1)) return false;

        // All nodes must be connected
        return visited.size === n;
    }
}