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
            if (l === r) {
                count++;
                break;
            }

            if (people[l] === limit) {
                count++;
                l++;
                continue;
            }

            if (people[r] === limit) {
                count++;
                r--;
                continue;
            }

            let sum = people[l] + people[r];

            if (sum <= limit) {
                count++;
                l++;
                r--;
            } else {
                count++
                r--;
            }
        }

        return count;
    }
}
