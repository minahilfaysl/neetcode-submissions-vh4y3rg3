class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];

        function dfs(i, subset) {
            if (subset.length === k) {
                result.push([...subset])
                return;
            }

            if (i > n) return;

            dfs(i + 1, subset);

            subset.push(i);
            dfs(i + 1, subset);
            subset.pop();
        }

        dfs(1, [])

        return result;
    }
}
