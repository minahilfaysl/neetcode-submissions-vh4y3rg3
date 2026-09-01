class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1,
        two = 0;
        for (let i = 0; i < n; i++) {
            [one, two] = [one + two, one];
        }

        return one;
    }
}
