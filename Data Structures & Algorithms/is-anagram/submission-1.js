class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // s = "racecar", t = "carrace"
        if (!s.length || !t.length) return false;
        if (s.length != t.length) return false;

        let map = new Map(); 
        // r: 0
        // c: 0
        // a: 0
        // e: 0

        // loop over the strings
        for (let i = 0; i < s.length; i++) {
            let charS = s[i]; // r, a, c, e, c, a, r
            let charT = t[i]; // c, a, r, r, a, c, e
            if (map.has(charS)) {
                let count = map.get(charS) + 1;
                map.set(charS, count);
            } else {
                map.set(charS, 1);
            }
            if (map.has(charT)) {
                let count = map.get(charT) - 1;
                map.set(charT, count);
            } else {
                map.set(charT, -1);
            }
        }

        for (let [_, value] of map) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
    }
}
