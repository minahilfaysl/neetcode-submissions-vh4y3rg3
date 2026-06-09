class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false);

        function dfs(permutation) {
            if (permutation.length === nums.length) {
                result.push([...permutation]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                permutation.push(nums[i]);

                dfs(permutation);

                permutation.pop();
                used[i] = false;
            }
        }

        dfs([]);
        return result;
    }
}
