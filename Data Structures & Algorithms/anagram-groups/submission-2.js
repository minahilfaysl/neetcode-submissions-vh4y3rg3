class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let sortedStr = str.split('').sort().join('');
            if (map.has(sortedStr)) {
                let array = map.get(sortedStr);
                array.push(str);
                map.set(sortedStr, array);
            } else {
                map.set(sortedStr, [str])
            }
        }

        let result = [];
        for (const value of map.values()) {
            result.push(value);
        }

        return result
    }
}
