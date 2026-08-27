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

        let map = new Map();

        function dfs(node) {
            if (!node) return null;

            //  already cloned, return the clone
            if(map.has(node)) return map.get(node)

            let clone = new Node(node.val);
            map.set(node, clone);

            for (let n of node.neighbors) {
                clone.neighbors.push(dfs(n));
            }

            return clone;
        }

        return dfs(node);
    }
}
