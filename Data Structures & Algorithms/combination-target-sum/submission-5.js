class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function dfs(i, currentSum, currentSubset) {
            // we reached the target, add to result
            if (currentSum === target) {
                result.push([...currentSubset]);
                return;
            }

            // end of the array or sum larger than target
            if (i === nums.length || currentSum > target) {
                return;
            }

            // take nums[i]
            // we do not increment i here if we take the number
            // to allow duplicates
            currentSubset.push(nums[i]);
            dfs(i, currentSum + nums[i], currentSubset);
            currentSubset.pop();

            // skip nums[i] and increment i
            dfs(i + 1, currentSum, currentSubset);
        }

        dfs(0, 0, []);
        return result;
    }
}
