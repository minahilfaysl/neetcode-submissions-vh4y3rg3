class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 0;
        let len = nums.length;

        while (r < len) {
            nums[l] = nums[r];
            while (r < len && nums[l] === nums[r]) {
                r++;
            }
            l++;
        }

        return l;
    }
}
