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
        if (!root) return new TreeNode(val, null, null);

        let currNode = root;

        while (currNode != null) {
            if (val > currNode.val) {
                // go right
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    let newNode = new TreeNode(val, null, null);
                    currNode.right = newNode;
                    currNode = null;
                }
                
            } else {
                // go left
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    let newNode = new TreeNode(val, null, null);
                    currNode.left = newNode;
                    currNode = null;
                }
            }
        }

        return root;
    }
}
