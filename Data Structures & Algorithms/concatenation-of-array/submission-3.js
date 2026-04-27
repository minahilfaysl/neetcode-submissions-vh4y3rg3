class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = [];
        for (let num of nums) {
            result.push(num);
        }
        for (let num of nums) {
            result.push(num);
        }
        return result;
    }
}
