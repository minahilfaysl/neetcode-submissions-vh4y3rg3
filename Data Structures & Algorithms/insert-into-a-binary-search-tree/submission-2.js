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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let newNode = new TreeNode(val);
        if (!root) return newNode;

        let currNode = root;

        while (currNode) {
            if (val > currNode.val) {
                // go right
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = newNode;
                    return root;
                }
                
            } else {
                // go left
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = newNode;
                    return root;
                }
            }
        }

        return root;
    }
}
