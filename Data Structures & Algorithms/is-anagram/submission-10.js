class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let freqArray = Array(26).fill(0);
        let base = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            let codeS = s.charCodeAt(i) - base;
            let codeT = t.charCodeAt(i) - base;
            freqArray[codeS]++;
            freqArray[codeT]--;
        }

        for (let count of freqArray) {
            if (count !== 0) return false;
        }

        return true;
    }
}
