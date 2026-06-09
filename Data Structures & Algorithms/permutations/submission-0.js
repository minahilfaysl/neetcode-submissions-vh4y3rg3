class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];

        function dfs(currentPermutation) {
            if (currentPermutation.length === nums.length) {
                result.push([...currentPermutation]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {

                if (currentPermutation.includes(nums[i])) {
                    continue;
                }

                currentPermutation.push(nums[i]);

                dfs(currentPermutation);

                currentPermutation.pop();
            }
        }

        dfs([]);

        return result;
    }
}
