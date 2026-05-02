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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return null;

        let parentNode = null;
        let currNode = root;

        // find node
        while (currNode && currNode.val !== key) {
            parentNode = currNode;
            if (key < currNode.val) currNode = currNode.left;
            else currNode = currNode.right;
        }

        if (!currNode) return root;

        // helper
        const replaceChild = (parent, curr, newChild) => {
            if (!parent) return newChild; // deleting root
            if (parent.left === curr) parent.left = newChild;
            else parent.right = newChild;
            return root;
        };
        
        // 0 or 1 children, replace
        if (!currNode.left) {
            return replaceChild(parentNode, currNode, currNode.right);
        }
        if (!currNode.right) {
            return replaceChild(parentNode, currNode, currNode.left);
        }

        // 3. Case: 2 children
        let succParentNode = currNode;
        let succNode = currNode.right;

        // find smallest in right subtree
        while (succNode.left) {
            succParentNode = succNode;
            succNode = succNode.left;
        }

        // replace value
        currNode.val = succNode.val;

        // delete successor node
        if (succParentNode.left === succNode) {
            succParentNode.left = succNode.right;
        } else {
            succParentNode.right = succNode.right;
        }

        return root;
    }
}
