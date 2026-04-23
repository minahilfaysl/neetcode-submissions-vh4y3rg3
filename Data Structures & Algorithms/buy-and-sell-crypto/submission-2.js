class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestStock = prices[0];
        
        for (let price of prices) {
            if (price < lowestStock) {
                lowestStock = price;
            }
            else {
                let profit = price - lowestStock;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}
