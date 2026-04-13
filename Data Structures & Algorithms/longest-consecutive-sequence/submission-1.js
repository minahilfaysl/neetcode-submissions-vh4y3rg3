class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const counts = [];

        for (let num of nums) {
            let count = 1;
            let nextNum = num + 1;
            while (nums.includes(nextNum)) {
                count++;
                nextNum++;
            }
            counts.push(count);
        }

        let max = 0;
        for (let count of counts) {
            if (max < count) {
                max = count;
            }
        }

        return max;
    }
}
