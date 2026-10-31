
class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        const m = text1.length;
        const n = text2.length;

        // Create DP table filled with zeros
        let dp = Array.from(
            { length: m + 1 },
            () => new Array(n + 1).fill(0)
        );

        // Compare characters from both strings
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {

                // If characters match
                if (text1[i - 1] === text2[j - 1]) {

                    dp[i][j] = 1 + dp[i - 1][j - 1];

                } else {

                    // Skip one character from either string
                    dp[i][j] = Math.max(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    );
                }
            }
        }

        return dp[m][n];
    }
}

