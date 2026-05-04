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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // PREORER: root -> left -> right
        // INORDER: left -> root -> right

        // preorder = [1,2,3,4]
        // inorder = [2,1,3,4]

        // so 1 is root, and anything before and after that in INORDER
        // defines the left, right substrees
        if (!preorder.length || !inorder.length) return null;

        let rootVal = preorder[0];
        let root = new TreeNode(rootVal);

        let mid = inorder.indexOf(rootVal);

        // split inorder
        let leftInorder = inorder.slice(0, mid);
        let rightInorder = inorder.slice(mid + 1);

        // split preorder based on left subtree size
        let leftPreorder = preorder.slice(1, mid + 1);
        let rightPreorder = preorder.slice(mid + 1);

        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);

        return root;
    }
}
