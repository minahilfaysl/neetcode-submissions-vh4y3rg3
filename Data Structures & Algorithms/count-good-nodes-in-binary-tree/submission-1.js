/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {

        function treePath(node, maxSoFar) {
            if (!node) return 0;

            let count = 0;

            // check if current node is good
            if (node.val >= maxSoFar) {
                count = 1;
            }

            // update max for children
            let newMax = Math.max(maxSoFar, node.val);

            count += treePath(node.left, newMax);
            count += treePath(node.right, newMax);

            return count;
        }

        return treePath(root, root.val);
    }
}
