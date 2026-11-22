class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {

            // if there is a higher temperature
            while (stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const prev = stack.pop();
                result[prev] = i - prev;
            }

            // i has not seen a higher temp so push
            stack.push(i);
        }

        return result;
    }
}
