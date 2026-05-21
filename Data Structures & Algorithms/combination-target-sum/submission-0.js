class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const backtrack = (start, current, remaining) => {
            // Found valid combination
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            // Exceeded target
            if (remaining < 0) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);

                // i instead of i + 1 because we can reuse elements
                backtrack(i, current, remaining - nums[i]);

                // Undo choice
                current.pop();
            }
        };

        backtrack(0, [], target);

        return result;
    }
}