class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        for (let left = 0; left < heights.length; left++) {
            for (let right = heights.length-1; right > left; right--) {
                let area = (right - left) * Math.min(heights[left], heights[right]);

                if (area > max) {
                    max = area;
                }
            }
        }

        return max;
    }
}
