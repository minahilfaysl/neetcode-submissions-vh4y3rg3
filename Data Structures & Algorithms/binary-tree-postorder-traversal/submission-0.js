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
     * @return {number[]}
     */
    postorderTraversal(root) {
        // left -> right -> root
        let result = []

        function dfs(node) {
            if (!node) return;

            dfs(node.left);
            dfs(node.right);
            result.push(node.val);
        }

        dfs(root);
        return result;
    }
}
