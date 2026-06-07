class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let results = [];

        function dfs(i, currentSubset) {
            if (i === nums.length) {
                results.push([...currentSubset])
                return;
            }

            dfs(i + 1, currentSubset);

            currentSubset.push(nums[i])
            dfs(i + 1, currentSubset)
            currentSubset.pop();
        }

        dfs(0, []);
        return results;
    }
}
