class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        if (s.length === 1) return s;
        
        let len = s.length - 1;
        let halfLen = Math.floor(s.length/2);

        for (let i = 0; i < halfLen; i++) {
            const temp = s[len-i];
            s[len-i] = s[i];
            s[i] = temp;
        }
    }
}
