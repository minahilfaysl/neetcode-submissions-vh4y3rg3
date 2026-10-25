class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = Math.max(...nums);
        let r = nums.reduce((sum, num) => sum + num, 0);

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            let subarrays = 1;
            let sum = 0;

            for (let num of nums) {
                if (sum + num > mid) {
                    subarrays++;
                    sum = num;
                } else {
                    sum += num;
                }
            }

            if (subarrays > k) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return l;
    }
}