class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // time complexity O(nlogn + mlogm)
        if (s.length !== t.length) return false;

        // let sortedS = s.split('').sort().join('');
        // let sortedT = t.split('').sort().join('');

        // return sortedS === sortedT;

        // time complexity O(n+m)
        let sCounts = new Map();
        let tCounts = new Map();

        for (let i = 0; i < s.length; i++) {
            if (sCounts.has(s[i])) {
                let count = sCounts.get(s[i]);
                sCounts.set(s[i], count + 1);
            } else {
                sCounts.set(s[i], 1);
            }

            if (tCounts.has(t[i])) {
                let count = tCounts.get(t[i]);
                tCounts.set(t[i], count + 1);
            } else {
                tCounts.set(t[i], 1);
            }
        }

        for (const key of sCounts.keys()) {
            if (sCounts.get(key) !== tCounts.get(key)) return false;
        }

        return true;
    }
}
