class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // nums = [3,4,5,6,1,2]
        let l = 0; // 0 -> 3 -> 3 -> 4
        let r = nums.length - 1; // 5 -> 5 -> 4
        
        while (l < r) { // true -> true -> true
            let mid = Math.floor((l + r) / 2); // 2 -> 4 -> 3
            
            // mid is in LEFT sorted portion
            if (nums[mid] > nums[r]) { // 5 > 2, true -> 1 > 2, false, 6 > 1, true
                l = mid + 1; // 3 -> 4
            } 
            // mid is in RIGHT sorted portion (or min itself)
            else {
                r = mid; // 4
            }
        }
        
        return nums[l]; // nums[4] = 1 
    }
}
