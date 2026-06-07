class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let max = 0;
        let maxFreq = 0;
        let map = new Map();

        for (let r = 0; r < s.length; r++) {
            let char = s[r];

            let len = r - l + 1;

            let count = 1;
            if (map.has(char)) {
                count = map.get(char) + 1;
                map.set(char, count);
                maxFreq = Math.max(maxFreq, count);
            } else {
                map.set(char, count);
                maxFreq = Math.max(maxFreq, count);
            }

            if (len - maxFreq > k) {
                map.set(s[l], map.get(s[l]) - 1); // ✅ FIX
                l++;
                len = r - l + 1;
            }

            max = Math.max(max, len);
        }

        return max;
    }
}