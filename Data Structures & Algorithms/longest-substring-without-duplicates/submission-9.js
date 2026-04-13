class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            let len = right - left + 1;
            if (len > maxLength) {
                maxLength = len;
            }

            set.add(s[right]);
        }

        return maxLength;
    }
}
