class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const TARGET = 0;
        const result = [];

        // sort the array
        nums.sort((a,b) => a-b);

        // then have an outerloop, for 1st variable
        for (let i = 0; i < nums.length; i++) {

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // use two pointers for the i+1 to end subarray to get values that sum to the target
            let left = i + 1;
            let right = nums.length-1; 

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < TARGET) left++;
                else if (sum > TARGET) right--;
                else {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // ensure no duplicates
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }

        return result;
    }
}
