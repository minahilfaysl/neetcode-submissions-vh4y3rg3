class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((sum, weight) => sum + weight, 0);

        function canShip(capacity) {
            let daysNeeded = 1;
            let currentWeight = 0;

            for (let weight of weights) {
                if (currentWeight + weight > capacity) {
                    daysNeeded++;
                    currentWeight = 0;
                }

                currentWeight += weight;
            }

            return daysNeeded <= days;
        }

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (canShip(mid)) {
                // capacity works, try smaller
                right = mid;
            } else {
                // capacity doesn't work, need bigger
                left = mid + 1;
            }
        }

        return left;
    }
}