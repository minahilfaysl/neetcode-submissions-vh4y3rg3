class Solution {
    merge(left, right) {
        let sortedArray = []

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sortedArray.push(left.shift())
            } else {
                sortedArray.push(right.shift())
            }
        }

        return [...sortedArray, ...left, ...right]
    }



    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;
        let mid = Math.floor(nums.length / 2);

        let left = this.sortArray(nums.slice(0, mid));
        let right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }
}
