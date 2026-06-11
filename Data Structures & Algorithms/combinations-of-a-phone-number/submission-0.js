class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        const map = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };

        let result = [];
        
        function dfs(index, combination) {
            if (combination.length === digits.length) {
                result.push(combination);
                return;
            }

            let num = Number(digits[index]);
            let chars = map[num];

            for (let i = 0; i < chars.length; i++) {
                let char = chars[i];

                dfs(index + 1, combination + char);
            }
        }

        dfs(0, '');
        return result;
    }
}
