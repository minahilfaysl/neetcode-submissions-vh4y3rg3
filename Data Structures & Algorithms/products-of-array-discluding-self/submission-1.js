class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = Array(nums.length).fill(1);
        let right = Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        let product = Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            product[i] = left[i] * right[i];
        }

        return product;
    }
}
