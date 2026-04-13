class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let mid = Math.floor((l+r)/2);

            // process mid
            let hours = 0;
            for (let p of piles) {
                hours += Math.ceil(p / mid);
            }

            if (hours <= h) {
                res = mid;
                r = mid - 1; // try smaller
            } else {
                l = mid + 1; // try bigger
            }
        }

        return res;
    }
}
