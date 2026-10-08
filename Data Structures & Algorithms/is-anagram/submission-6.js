class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // count characters in a map
        // then remove them from the map
        // if value count is zero at the end return true

        // OR, have a character array for both,
        // +1 for s, -1 for t
        // check all values in the array should be zero

        if (s.length !== t.length) return false;

        let charArray = Array(26).fill(0);
        let charCodeAtA = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {

            let indexS = s.charCodeAt(i) - charCodeAtA;
            charArray[indexS] += 1;

            let indexT = t.charCodeAt(i) - charCodeAtA;
            charArray[indexT] -= 1;
        }

        for (let count of charArray) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}
