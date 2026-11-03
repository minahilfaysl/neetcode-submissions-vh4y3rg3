
class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {

                let remaining = i - coin;

                if (remaining >= 0) {
                    dp[i] = Math.min(
                        dp[i],
                        dp[remaining] + 1
                    );
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
