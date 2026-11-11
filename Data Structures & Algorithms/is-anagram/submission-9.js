class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let arrS = s.split('').sort().join('')
        let arrT = t.split('').sort().join('')

        return arrS === arrT;
    }
}
