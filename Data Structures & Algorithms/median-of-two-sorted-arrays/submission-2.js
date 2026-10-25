class Solution {
    findMedianSortedArrays(nums1, nums2) {
        let totalLen = nums1.length + nums2.length;

        let mid = Math.floor(totalLen / 2);
        let odd = totalLen % 2;

        let i = 0, j = 0;
        let median1 = 0;
        let median2 = 0;

        while (i + j <= mid) {
            median2 = median1;
            if (j >= nums2.length || nums1[i] < nums2[j]) {
                median1 = nums1[i];
                i++;
            } else {
                median1 = nums2[j];
                j++;
            }
        }

        if (odd) return median1;
        return (median1 + median2) / 2;
    }
}