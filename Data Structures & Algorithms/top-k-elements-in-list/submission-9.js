class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = new Map();

        // Count frequencies
        for (let num of nums) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }

        // Create buckets
        let buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        console.log(buckets)

        // Put numbers into their frequency bucket
        for (let [num, count] of counts) {
            buckets[count].push(num);
        }

        console.log(buckets)

        // Get k most frequent
        let result = [];

        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}