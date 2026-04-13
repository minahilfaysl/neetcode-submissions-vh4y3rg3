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
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        // compute the height of left and right subtrees
        let lHeight = this.maxDepth(root.left);
        let rHeight = this.maxDepth(root.right);

        return Math.max(lHeight, rHeight) + 1;
    }
}
