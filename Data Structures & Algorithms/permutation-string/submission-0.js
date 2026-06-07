class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let window = s1.length;

        function getFreqArray(str) {
            let freqArray = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                let char = str.charCodeAt(i) - 'a'.charCodeAt(0);
                freqArray[char] += 1;
            }
            return freqArray;
        }

        function isEqual (arr1, arr2) {
            return arr1.every((val, index) => val === arr2[index]);
        }

        let l = 0;
        let s1FreqArray = getFreqArray(s1);

        for (let r = window - 1; r < s2.length; r++) {
            let substr = s2.slice(l, r + 1);

            let subStrFreqArray = getFreqArray(substr);

            if (isEqual(subStrFreqArray, s1FreqArray)) return true;
            l++;
        }

        return false;
    }
}
