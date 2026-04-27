class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let resultStack = [];
        
        for (let operation of operations) {

            if (!Number.isNaN(Number(operation))) {
                resultStack.push(Number(operation));
            } else {
                if (operation === "+") {
                    let num1 = resultStack.at(-1);
                    let num2 = resultStack.at(-2);
                    resultStack.push(num1 + num2);
                } else if (operation === "C") {
                    resultStack.pop();
                } else if (operation === "D") {
                    let prevScore = resultStack.at(-1);
                    resultStack.push(prevScore * 2);
                }
            }
        }

        let score = 0;
        for (let result of resultStack) {
            score += result;
        }

        return score;
    }
}
