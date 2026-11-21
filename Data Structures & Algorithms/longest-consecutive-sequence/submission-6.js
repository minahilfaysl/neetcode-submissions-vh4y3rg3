class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxLength = 0;

        for (let num of set) {

            // Only start counting if num is
            // the beginning of a sequence
            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                maxLength = Math.max(maxLength, length);
            }
        }

        return maxLength;
    }
}