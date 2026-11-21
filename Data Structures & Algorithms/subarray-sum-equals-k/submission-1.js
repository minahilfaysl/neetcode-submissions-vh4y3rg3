class Solution {
    /**
     * Restate: We are getting an unsorted array with both positive and negative
     * numbers which will ALWAYS have atleast one CONTIGUOUS subarray sum equal to k
     * 
     * example 1: [1], k = 1, output = 1
     * example 2: [-1], k = -1, output = -1
     * example 3: [2, 2, 2], k = 4, output = 2
     * example 4: [2,-1,1,2], k = 2, output = 4
     * 
     * BRUTE FORCE: we fix a number i, and keep moving j forward and checking if the sum equals k.
     * We keep a counter that increments if at anytime the running sum equals k for all elements 
     * in the array, against all other contiguous elements in the array.
     * This will be O(n^2) time, and O(1) space.
     * We can't use sliding window here, as we have an unsorted array with negative numbers 
     * and it will be hard to keep track of window boundaries.
     * 
     * OPTIMAL: We can create a prefix sum map, which will keep a count of how many times
     * we saw our required sum, incrementing our count when sum - k = 0;
     * nums = [2, -1, 1, 2], prefix sums = [2, 1, 2, 4]
     * prefixSum map: {
     *  0: 1, // base case
     *  2: 1 + 1,
     *  1: 1,
     *  4: 1,
     * }
     * Since we use a map, keep a running sum and another count variable, and iterate over the loop once
     * time complexity = O(n), space = O(n) worst case due to the map.
     */
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map(); // key = sum, value = count;

        let count = 0;
        let sum = 0;
        map.set(0, 1); // base case

        for (let num of nums) {
            sum += num;

            if (map.has(sum - k)) {
                count += map.get(sum - k);
            }

            map.set(sum, (map.get(sum) || 0) + 1);
        }

        return count;
    }

    /**
     * Lets dry run this with an example
     * let nums = [2,-1,1,2], k = 4;
     * console.log("subarray sum equals k:", subarraySum(nums, k))
     * 
     * Expected iterations to run: 4 (0-3) for the length of the array.
     * 
     * Iteration 0:
     * num = 2
     * sum = 0 + 2 = 2
     * Check if map has (sum - k) 2 - 2 = 0, true
     * count = 0 + 1
     * map = {
     *  0: 1,
     *  2: 1,
     * }
     * 
     * Iteration 1:
     * num = -1
     * sum = 2 - 1 = 1
     * Check if map has (sum - k) 1 - 2 = -1, false
     * count = 1 // not updated
     * map = { // updated with sum.
     *  0: 1,
     *  2: 1,
     *  1: 1,
     * }
     * 
     * Iteration 2:
     * num = 1
     * sum = 1 + 1 = 2
     * Check if map has (sum - k) 2 - 2 = 0, true
     * count = 1 + 1 = 2
     * map = { // updated count for sum.
     *  0: 1,
     *  2: 2,
     *  1: 1,
     * }
     * 
     * Iteration 3:
     * num = 2
     * sum = 2 + 2 = 4
     * Check if map has (sum - k) 4 - 2 = 2, true
     * count = 2 + 2 = 4
     * map = { // updated count for sum.
     *  0: 1,
     *  2: 2,
     *  1: 1,
     *  4: 1
     * }
     * 
     * return count, which is 4.
     */
}
