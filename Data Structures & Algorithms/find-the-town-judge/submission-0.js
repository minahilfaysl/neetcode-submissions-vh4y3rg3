class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const indegree = new Array(n + 1).fill(0);
        const outdegree = new Array(n + 1).fill(0);

        for (const [a, b] of trust) {
            outdegree[a]++;
            indegree[b]++;
        }

        for (let i = 1; i <= n; i++) {
            if (indegree[i] === n - 1 && outdegree[i] === 0) {
                return i;
            }
        }

        return -1;
    }
}
