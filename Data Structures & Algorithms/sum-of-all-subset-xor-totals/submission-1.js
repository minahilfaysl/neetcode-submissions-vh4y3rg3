class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let total = 0;

        function dfs(i, xor) {
            if (i === nums.length) {
                total += xor;
                return;
            }

            dfs(i + 1, xor)
            dfs(i + 1, xor ^ nums[i])
        }

        dfs(0, 0)

        return total;
    }
}