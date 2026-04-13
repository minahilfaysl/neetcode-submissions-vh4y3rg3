class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')': '(',
            ']': '[',
            '}': '{',
        }

        for (let char of s) {
            if (map[char]) {
                let top = stack.pop();

                if (map[char] !== top) {
                    return false
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
