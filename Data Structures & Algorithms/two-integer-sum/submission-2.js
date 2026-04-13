class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let compliment = target - nums[i];
            if (map.has(compliment)){
                let c = map.get(compliment);
                return [c, i];
            } 
            map.set(nums[i], i);
        }
    }
}
