class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        const result = [];

        function dfs(i, currentSum, currentSubset) {
            // we reached the target, add to result
            if (currentSum === target) {
                result.push([...currentSubset]);
                return;
            }

            // end of the array or sum larger than target
            if (i === candidates.length || currentSum > target) {
                return;
            }

            for (let j = i; j < candidates.length; j++) {
                // skip duplicates
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }

                currentSubset.push(candidates[j]);

                dfs(j + 1, currentSum + candidates[j], currentSubset);

                currentSubset.pop();
            }
        }

        dfs(0, 0, []);
        return result;
    }
}
