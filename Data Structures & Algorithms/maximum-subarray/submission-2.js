class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        /**
         * example 1: [-1, -1, -1] output = -1
         * example 2: [0, -1, -2, -3] output = 0
         * example 3: [1, 0, -1, -2] output = 1
         */
        /** Brute force: we create contiguous subarrays of all combinations
         * [2], [2, -3], [-3], [2, -3, 4], [4], [-3, 4], ...
         * Iterate over all subarrays, calculate their sum and track which 
         * ones the biggest sum so far.
         * creating all subarray combinations would probably have to be O(2^n)
         * then interating over each to calculate the sum, would also be O(k * 2^n)
         * where k is <= n, so worst case O(n * 2^n)
         * We can't use a sliding window here either, we have negative numbers, 
         * which will make it harder to adjust boundaries.
         */

        /**
         * Optimal approach, we can use a greedy approach, where we assume that the maximum
         * will always have to positive, and if it goes into negative at any point, we can
         * reset the current sum we have going on.
         * for example: [1, -1, 3, -1, -1] output = 3
         * let dry run this algorith on this example:
         * [1, -1, 3, -1, 1], and right now, with [1, -1], we have zero. If max (which is 1) > 0,
         * we can reset the current sum whenever it reaches zero.
         * then with [3], we have sum = 3, which will be the max, and so on.
         * Since we iterate over the array once, and only use a few variables to keep track,
         * time complexity = O(n), and space complexity = O(1) which is the optimal approach.
         */

        let maxSum = -Infinity;
        let currentSum = 0;

        for (let num of nums) {
            currentSum += num;

            maxSum = Math.max(maxSum, currentSum);

            if (currentSum < 0) {
                // restart the subarray sum
                currentSum = 0;
            }
        }

        return maxSum;
    }

    /**
     * Lets dry run this algorithm to see if it is working as expected
     * 
     * let nums = [2,-3,4,1], output should be 5.
     * console.log("Maximum subarray sum:", maxSubArray(nums))
     * 
     * iteration 0:
     * num = 2
     * currentSum = 2
     * check if currentSum > maxSum, true
     * maxSum = 2
     * check if currentSum < 0,
     * -> no reset
     * 
     * iteration 1:
     * num = -3
     * currentSum = -1
     * check if currentSum > maxSum, false
     * maxSum = 2
     * check if currentSum < 0, true
     * currentSum = 0
     * 
     * iteration 2:
     * num = 4
     * currentSum = 0 + 4 = 4
     * check if currentSum > maxSum, true
     * maxSum = 4
     * check if currentSum < 0, false, -> no reset
     * 
     * iteration 3:
     * num = 1
     * currentSum = 4 + 1 = 5
     * check if currentSum > maxSum, true
     * maxSum = 5
     * check if currentSum < 0, false, -> no reset
     * 
     * return maxSum, which is 5.
     */
}
