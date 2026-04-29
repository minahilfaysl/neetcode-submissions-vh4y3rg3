class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(left, right) {
        let sortedArr = [] // the sorted items will go here
        while (left.length && right.length) {
            // Insert the smallest item into sortedArr
            if (left[0] < right[0]) {
            sortedArr.push(left.shift())
            } else {
            sortedArr.push(right.shift())
            }
        }
        // Use spread operators to create a new array, combining the three arrays
        return [...sortedArr, ...left, ...right]
    }

    sortArray(nums) {
        // Base case
        if (nums.length <= 1) return nums;
        let mid = Math.floor(nums.length / 2);

        // Recursive calls
        let left = this.sortArray(nums.slice(0, mid));
        let right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }
}
