class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let len = strs.length;
        if (len < 2) return [strs];

        const map = new Map();

        for (let i = 0; i < len; i++) {
            let sorted = strs[i].split('').sort().join('');

            if (map.has(sorted)) {
                map.get(sorted).push(strs[i]);
            } else {
                map.set(sorted, [strs[i]]);
            }
        }

        return Array.from(map.values());
    }
}
