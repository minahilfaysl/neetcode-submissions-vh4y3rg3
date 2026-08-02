class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();
        let l = 0;

        for (let r = 0; r < nums.length; r++) {

            while (r - l > k) {
                set.delete(nums[l]);
                l++;
            }

            if (set.has(nums[r])) {
                return true;
            }

            set.add(nums[r]);
        }

        return false;
    }
}