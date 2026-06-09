class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => (a - b))
        const subsets = [];

        function dfs(i, currentSubset) {
            if (i === nums.length) {
                subsets.push([...currentSubset]);
                return;
            }

            currentSubset.push(nums[i]);
            dfs(i + 1, currentSubset);
            currentSubset.pop();

            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }

            dfs(i + 1, currentSubset);
        }

        dfs(0, []);

        return subsets;
    }
}
