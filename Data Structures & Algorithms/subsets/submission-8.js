class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        function dfs(i, currentSubset) {
            if (i >= nums.length) {
                result.push([...currentSubset]);
                return;
            }

            // exclude
            dfs(i + 1, currentSubset);

            // include
            currentSubset.push(nums[i]);
            dfs(i + 1, currentSubset);
            currentSubset.pop();
        }

        dfs(0, []);
        return result;
    }
}
