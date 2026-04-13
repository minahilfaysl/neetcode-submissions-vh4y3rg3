class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (let num of nums) {
            if (!map.get(num)) {
                map.set(num, true)
            } else {
                return true;
            }
        }

        return false;
    }
}
