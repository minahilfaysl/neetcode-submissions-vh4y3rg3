class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        const threshold = Math.floor(nums.length / 2);

        // Count frequencies
        for (const num of nums) {
            if (map.has(num)) {
                let count = map.get(num) + 1;
                map.set(num, count);

                // Early exit optimization
                if (count > threshold) return num;
            } else {
                map.set(num, 1);
            }
        }

        // Fallback find majority
        for (const num of nums) {
            if (map.get(num) > threshold) {
                return num;
            }
        }
    }
}