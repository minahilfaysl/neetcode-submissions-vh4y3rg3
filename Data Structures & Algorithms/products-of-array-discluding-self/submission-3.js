class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = new Array(nums.length).fill(1);

        // starting from the left for this Array
        // index 0 will always have a value of 1
        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        let right = new Array(nums.length).fill(1);

        // starting from the right for this Array
        // index 0 will always have a value of 1
        for (let i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result[i] = left[i] * right[i];
        }
        return result;
    }
}
