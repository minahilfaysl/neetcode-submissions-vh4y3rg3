class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let l = 0;
        let r = people.length - 1;
        let count = 0;

        people.sort((a, b) => a - b);

        while (l <= r) {
            const sum = people[l] + people[r];

            if (sum <= limit) {
                l++;
            }

            r--;
            count++;
        }

        return count;
    }
}