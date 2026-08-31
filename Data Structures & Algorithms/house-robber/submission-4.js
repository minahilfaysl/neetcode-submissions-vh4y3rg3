class Solution {
    rob(nums) {
        const n = nums.length;
        const memo = new Array(n).fill(-1);

        function dfs(i) {
            if (i >= n) return 0;

            if (memo[i] !== -1) {
                return memo[i];
            }

            const rob = nums[i] + dfs(i + 2);
            const skip = dfs(i + 1);

            memo[i] = Math.max(rob, skip);

            return memo[i];
        }

        return dfs(0);
    }
}