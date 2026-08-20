class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const limit = Math.floor(nums.length / 3);
        const map = new Map();
        const result = [];

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);

            if (map.get(num) === limit + 1) {
                result.push(num);
            }
        }

        return result;
    }
}