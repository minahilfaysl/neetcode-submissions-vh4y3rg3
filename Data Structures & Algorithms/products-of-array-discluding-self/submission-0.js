class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let i = 0;

        while (i < nums.length) {
            let j = 0;
            let product = 1;

            while (j < nums.length) {
                if (j !== i) {
                   product *= nums[j];
                }
                j++;
            }
            result.push(product);
            i++;
        }
        return result;
    }
}
