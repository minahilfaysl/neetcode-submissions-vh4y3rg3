class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let maxL = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];

            while (set.has(char)) {
                set.delete(s[l]);
                l++;
            }

            set.add(char);
            maxL = Math.max(maxL, r - l + 1);
        }

        return maxL;
    }
}
