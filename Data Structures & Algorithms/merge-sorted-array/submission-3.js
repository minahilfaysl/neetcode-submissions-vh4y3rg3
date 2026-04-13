class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        
        let i = m, j = 0;
        while (i < m+n && j < n) {
            nums1[i] = nums2[j];
            i++;
            j++;
        }

        nums1.sort((a, b) => a - b);
    }
}
