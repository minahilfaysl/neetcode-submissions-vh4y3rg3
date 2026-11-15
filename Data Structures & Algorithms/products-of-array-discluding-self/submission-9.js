class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);

        let prefix = 1;
        // multiply by prefix
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // multiply by postfix
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}
