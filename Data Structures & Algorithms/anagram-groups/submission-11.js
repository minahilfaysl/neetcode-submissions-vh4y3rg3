class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map() // key: freq array, value: array of strings
        let charCodeAtA = "a".charCodeAt(0);

        for (let str of strs) {
            let freqArray = Array(26).fill(0);

            for (let char of str) {
                let charCode = char.charCodeAt(0) - charCodeAtA;
                freqArray[charCode]++;
            }

            freqArray = freqArray.toString()

            if (map.has(freqArray)) {
                map.get(freqArray).push(str);
            } else {
                map.set(freqArray, [str]);
            }
        }

        let result = [];
        for (let value of map.values()) {
            result.push(value);
        }
        return result;
    }
}
