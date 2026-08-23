class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum = new Map();
        
        // A sum of 0 has occurred once before we start
        prefixSum.set(0, 1);

        let sum = 0;
        let count = 0;

        for (const num of nums) {
            sum += num;

            // Have we seen (sum - k) before?
            if (prefixSum.has(sum - k)) {
                count += prefixSum.get(sum - k);
            }

            // Record the current prefix sum
            prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
        }

        return count;
    }
}