class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let total = 0;

        function dfs(index, currentXor) {
            // Reached the end => one complete subset
            if (index === nums.length) {
                total += currentXor;
                return;
            }

            // Don't take nums[index]
            dfs(index + 1, currentXor);

            // Take nums[index]
            dfs(index + 1, currentXor ^ nums[index]);
        }

        dfs(0, 0);
        return total;
    }
}