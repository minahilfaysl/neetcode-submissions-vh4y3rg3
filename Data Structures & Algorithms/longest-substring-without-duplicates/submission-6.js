class Solution {
    lengthOfLongestSubstring(s) {
        let set = new Set(); // z, x, y

        let left = 0; 
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right]
            while (set.has(char)) {
                set.delete(s[left]);
                left++;
            }
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
            }
            set.add(char); 
        }

        return maxLength;
    }
}