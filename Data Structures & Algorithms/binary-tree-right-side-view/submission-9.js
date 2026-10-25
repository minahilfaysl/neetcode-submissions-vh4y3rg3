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
    rightSideView(root) {
        if (!root) return [];

        let result = [];
        let q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            let levelSize = q.size();

            for (let i = 0; i < levelSize; i++) {
                let node = q.pop();

                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);

                // capture the last node of this level
                if (i === levelSize - 1) {
                    result.push(node.val);
                }
            }
        }

        return result;

        // let result = [];

        // function dfs(node, depth) {
        //     if (!node) return;

        //     if (depth === result.length) {
        //         result.push(node.val);
        //     }

        //     dfs(node.right, depth + 1);
        //     dfs(node.left, depth + 1);
        // }

        // dfs(root, 0);
        // return result;
        
    }
}
