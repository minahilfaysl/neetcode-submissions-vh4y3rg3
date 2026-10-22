class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let right = 0;
        let maxLen = 0;

        while (right < s.length) {
            let char = s[right];

            while (set.has(char)) {
                set.delete(s[left]);
                left++;
            }

            set.add(char);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}
