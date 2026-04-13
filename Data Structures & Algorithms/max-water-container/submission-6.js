class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left <= right) {
            let amount = Math.abs(right - left) * Math.min(heights[left], heights[right]);

            if (amount > max) {
                max = amount
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
