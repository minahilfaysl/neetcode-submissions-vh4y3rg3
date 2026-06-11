class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }

        return true;
    }

    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const dfs = (start, comb) => {
            if (start === s.length) {
                res.push([...comb]);
                return;
            }

            for (let end = start + 1; end <= s.length; end++) {
                const sub = s.substring(start, end);

                if (!this.isPalindrome(sub)) continue;

                comb.push(sub);
                dfs(end, comb);
                comb.pop();
            }
        };

        dfs(0, []);
        return res;
    }
}