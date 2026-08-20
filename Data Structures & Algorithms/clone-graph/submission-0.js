/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const map = new Map();

        function dfs(node) {
            // Already cloned this node
            if (map.has(node)) {
                return map.get(node);
            }

            // Create the clone
            const clone = new Node(node.val);

            // Save it BEFORE visiting neighbors
            map.set(node, clone);

            // Clone all neighbors
            for (const neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        }

        return dfs(node);
    }
}
