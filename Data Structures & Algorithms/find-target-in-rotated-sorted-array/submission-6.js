class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // so what we'll do is binary search
        // in the two halfs of the sorted array

        // [6, 0, 1, 2, 3, 4, 5]
        // so mid here will be: 2.
        // target = 1


        let left = 0;
        let right = nums.length - 1; // 7, 2

        while (left <= right) { // 0 <= 7, 0 <= 2, 2<=2
            let mid = Math.floor((left + right)/2); // nums[3] = 2, nums[1] = 0, nums[2] = 1 

            if (nums[mid] === target) { // false, false, true
                return mid; // 2
            }
            
            // let check left sorted half
            if (nums[left] <= nums[mid]) { // nums[0] <= nums[3] = 6 <= 2 false, 6 < 0 false
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // check right sorted half
            else { // here, here again
                if (target > nums[mid] && target <= nums[right]) { // false, 1 > 0 && 1 <= 1
                    left = mid + 1; // 1+1 -> 2
                } else {
                    right = mid - 1; // 3-1 -> 2
                }
            }
        }

        return -1;
    }
}
