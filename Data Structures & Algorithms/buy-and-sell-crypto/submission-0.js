class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minStock = Infinity;
        let maxProfit = 0;

        for (let price of prices) {
            if (price < minStock) {
                minStock = price;
            }
            else {
                let profit = price - minStock;

                if (maxProfit < profit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}
