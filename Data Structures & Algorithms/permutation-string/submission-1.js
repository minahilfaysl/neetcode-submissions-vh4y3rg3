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
                freqArray[char]++;
            }

            return freqArray;
        }

        function isEqual(arr1, arr2) {
            return arr1.every((val, index) => val === arr2[index]);
        }

        let s1FreqArray = getFreqArray(s1);
        let windowFreqArray = getFreqArray(s2.slice(0, window));

        if (isEqual(s1FreqArray, windowFreqArray)) {
            return true;
        }

        let l = 0;

        for (let r = window; r < s2.length; r++) {
            // remove left char
            let leftChar = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            windowFreqArray[leftChar]--;

            // add right char
            let rightChar = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            windowFreqArray[rightChar]++;

            l++;

            if (isEqual(s1FreqArray, windowFreqArray)) {
                return true;
            }
        }

        return false;
    }
}
