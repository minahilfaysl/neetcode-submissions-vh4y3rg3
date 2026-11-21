class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0, r = 0;
        let maxLength = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];

            while (set.has(char)) {
                set.delete(s[l]);
                l++;
            }
            set.add(char);

            maxLength = Math.max(maxLength, r- l + 1);
        }

        return maxLength;
    }
}
