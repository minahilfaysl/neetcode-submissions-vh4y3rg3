class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];

        function dfs(i, currentSubset) {
            if (currentSubset.length === k) {
                result.push([...currentSubset]);
                return;
            }

            if (i > n) return;

            // include
            currentSubset.push(i);
            dfs(i + 1, currentSubset);
            currentSubset.pop();

            // exclude
            dfs(i + 1, currentSubset);
        }

        dfs(1, []);
        return result;
    }
}
