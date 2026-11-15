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

            const key = freqArray.toString()

            if (map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str]);
            }
        }

        return Array.from(map.values());
    }
}
