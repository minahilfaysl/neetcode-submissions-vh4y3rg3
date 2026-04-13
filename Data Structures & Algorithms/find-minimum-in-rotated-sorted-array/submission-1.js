class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            
            // mid is in LEFT sorted portion
            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } 
            // mid is in RIGHT sorted portion (or min itself)
            else {
                r = mid;
            }
        }
        
        return nums[l];
    }
}
