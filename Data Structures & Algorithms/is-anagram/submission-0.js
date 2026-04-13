class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sLen = s.length;
        let tlen = t.length;

        if (s.length !== t.length) return false;

        let sSorted = s.split('').sort().join('');;
        let tSorted = t.split('').sort().join('');;

        return sSorted === tSorted;
    }
}
