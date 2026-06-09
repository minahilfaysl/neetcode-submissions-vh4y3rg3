class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let perms = [];
        const used = new Array(nums.length).fill(false);
        nums.sort((a, b) => a - b);

        function dfs(subset) {
            if (subset.length === nums.length) {
                perms.push([...subset]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;

                used[i] = true;
                subset.push(nums[i])
                dfs(subset)
                subset.pop()
                used[i] = false;
            }
        }

        dfs([]);
        return perms;
    }
}
