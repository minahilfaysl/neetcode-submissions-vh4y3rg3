class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}; // key = sorted letters, value = array of words,

        for (let str of strs) {
            let sorted = str.split('').sort().join('');

            if (map[sorted]) {
                map[sorted].push(str);
            } else {
                map[sorted] = [str];
            }
        }

        return Object.values(map);
    }
}
