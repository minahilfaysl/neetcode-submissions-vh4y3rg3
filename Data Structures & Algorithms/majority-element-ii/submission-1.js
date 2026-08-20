class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let limit = Math.floor(nums.length/3);
        let set = new Set;
        let map = new Map();

        if (limit === 0) return nums;

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);

                if (map.get(num) > limit) {
                    set.add(num);
                }
            }
            else {
                map.set(num, 1);
            }

        }

        return Array.from(set.values());
    }
}
