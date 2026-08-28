class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // we traverse the graph, mark all nodes as visited that we have visited
        // then we only dfs on the nodes that are not in the visited set

        // create the adj list
        let adj = Array.from(
            { length: n },
            () => []
        );
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let visited = new Set();

        function dfs(i) {
            if (visited.has(i)) {
                return;
            };

            visited.add(i);

            for (let child of adj[i]) {
                dfs(child);
            }
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
