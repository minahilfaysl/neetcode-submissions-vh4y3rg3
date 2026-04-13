class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length-1;

        while (left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);

            if (area > max) {
                max = area;
            }

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return max;
    }
}
