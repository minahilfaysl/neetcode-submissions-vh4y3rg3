class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let midIndex = Math.floor(nums.length - 1);

        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1;
        }

        while (nums.length > 1) {
            if (nums[midIndex] < target) {
                // go right
                nums = nums.splice(midIndex, nums.length);
                midIndex = Math.floor(nums.length - 1);
            }
            if (nums[midIndex] > target) {
                // go left
                nums = nums.splice(0, midIndex);
                midIndex = Math.floor(nums.length - 1);
            }
            if (nums[midIndex] === target) {
                return midIndex;
            }
        }

        return -1;
    }
}
