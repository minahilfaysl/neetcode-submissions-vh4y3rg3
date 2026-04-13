class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // 1. Count frequencies
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // 2. Convert map to array
        const arr = Array.from(map.entries()); // [num, freq]

        // 3. Sort by frequency (descending)
        arr.sort((a, b) => b[1] - a[1]);

        // 4. Extract top k elements
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(arr[i][0]);
        }

        return result;
    }
}
