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
            // store uniques in nums[l]
            nums[l] = nums[r];
            // skip duplicates for that unique value
            while (r < len && nums[l] === nums[r]) {
                // the next unique value is now at r
                r++;
            }
            // we want to save it at l+1
            l++;
        }

        return l;
    }
}
