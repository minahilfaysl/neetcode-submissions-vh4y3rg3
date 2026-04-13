class Solution {
    lengthOfLongestSubstring(s) {

        let set = new Set();
        let left = 0;
        let maxWindow = 0;

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            maxWindow = Math.max(maxWindow, right - left + 1);
        }

        return maxWindow;
    }
}