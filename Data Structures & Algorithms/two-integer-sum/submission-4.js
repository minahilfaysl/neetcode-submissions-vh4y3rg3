class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map() // key = num, value = indices

        for (let i = 0; i < nums.length; i++) {
            let compliment = target - nums[i];
            if (map.has(compliment)) {
                return [map.get(compliment), i];
            }
            map.set(nums[i], i);
        }
    }
}
