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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = null;
        
        function dfs(root) {
            if (!root) return;

            // INORDER: left -> root -> right
            dfs(root.left);

            // process root
            count++;
            if (count === k) {
                result = root.val;
                return;
            }

            dfs(root.right);
        }

        dfs(root);
        return result;
    }
}
