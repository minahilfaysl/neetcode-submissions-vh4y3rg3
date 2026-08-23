class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        if (deadends.includes("0000")) return -1;

        const q = new Queue([['0000', 0]]);
        let visited = new Set(deadends);

        function getLockCombinations(lock) {
            let result = []
            // chars length
            for (let i = 0; i < 4; i++) {
                // addition
                let digit = (+lock[i] + 1) % 10;
                let newLock = lock.slice(0, i) + digit + lock.slice(i+1);
                result.push(newLock);
                // substraction

                digit = (+lock[i] - 1 + 10) % 10;
                newLock = lock.slice(0, i) + digit + lock.slice(i+1);
                result.push(newLock);
            }

            return result;
        }

        while (!q.isEmpty()) {
            let [lock, turns] = q.dequeue();

            if (lock === target) {
                return turns;
            }

            let possibleLocks = getLockCombinations(lock);
            for (let plock of possibleLocks) {
                if (!visited.has(plock)) {
                    visited.add(plock);
                    q.enqueue([plock, turns + 1])
                }
            }
            
        }

        return -1;
    }
}
