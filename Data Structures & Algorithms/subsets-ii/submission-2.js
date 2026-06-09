class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => (a - b))
        const subsets = [];

        function dfs(start, subset) {
            subsets.push([...subset]);

            for (let i = start; i < nums.length; i++) {

                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                subset.push(nums[i]);
                dfs(i + 1, subset);
                subset.pop();
            }
        }

        dfs(0, []);
        return subsets;
    }
}
