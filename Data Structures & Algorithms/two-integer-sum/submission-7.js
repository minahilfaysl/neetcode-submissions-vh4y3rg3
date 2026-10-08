class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let comp = target - nums[i];

            if (map.has(comp)) {
                let index = map.get(comp);
                return [index, i]
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
