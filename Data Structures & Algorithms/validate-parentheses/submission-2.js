class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (const char of s) {
            // if it's a closing bracket
            if (map[char]) {
                const top = stack.pop();
                if (top !== map[char]) return false;
            } else {
                // otherwise it's an opening bracket
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
