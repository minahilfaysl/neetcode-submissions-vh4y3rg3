class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let count = new Map();

        for (let i = 0; i < s.length; i++) {
            count.set(s[i], (count.get(s[i]) || 0) + 1);
            count.set(t[i], (count.get(t[i]) || 0) - 1);
        }

        for (let value of count.values()) {
            if (value !== 0) return false;
        }

        return true;
    }
}
