class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minStock = Infinity;
        let maxProfit = 0;
        for (let price of prices) {
            minStock = Math.min(minStock, price);

            let profit = price - minStock;
            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
