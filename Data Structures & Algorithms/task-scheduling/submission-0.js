class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Array(26).fill(0);

        // count frequencies
        for (let task of tasks) {
            freq[task.charCodeAt(0) - 65]++;
        }

        // highest frequency
        let maxFreq = Math.max(...freq);

        // count how many tasks have max frequency
        let countMax = 0;

        for (let count of freq) {
            if (count === maxFreq) {
                countMax++;
            }
        }

        // formula
        let intervals = (maxFreq - 1) * (n + 1) + countMax;

        return Math.max(tasks.length, intervals);
    }
}
