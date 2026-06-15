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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function sameTree(node, subNode) {
            if (!node && !subNode) return true;
            if (!node || !subNode) return false;
            if (node.val !== subNode.val) return false;

            return sameTree(node.left, subNode.left) && sameTree(node.right, subNode.right)
        }
        
        function dfs(node) {
            if (!node) return false;

            // check each node against the sub-root
            if (sameTree(node, subRoot)) return true;
    
            return dfs(node.left) || dfs(node.right)

        }
        return dfs(root);
    }
}