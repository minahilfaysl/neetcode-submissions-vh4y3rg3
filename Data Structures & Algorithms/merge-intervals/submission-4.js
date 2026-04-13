class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // base case
        if (intervals.length <= 1) {
            return intervals;
        }

        // otherwise, sort by starting intervals
        intervals.sort((a, b) => {
            return a[0] - b[0];
        });

        // merge by starting numbers, with the largest interval being the final value
        let result = [];
        let current = intervals[0];
        for (let i = 0; i < intervals.length; i++) {
            let next = intervals[i];

            if (current[1] >= next[0]) {
                current[1] =  Math.max(current[1], next[1]);
            } else {
                result.push(current);
                current = next;
            }
        }

        result.push(current);
        return result;
    }
}
