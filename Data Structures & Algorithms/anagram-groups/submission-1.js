class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map(); // key = sorted letters, value = array of words,

        for (let str of strs) {
            let sorted = str.split('').sort().join('');

            if (map.has(sorted)) {
                let arr = map.get(sorted);
                arr.push(str);
                map.set(sorted, arr);
            } else {
                map.set(sorted, [str]);
            }
        }

        let result = [];
        for (let [_, value] of map) {
            result.push(value);
        }

        return result;
    }
}
