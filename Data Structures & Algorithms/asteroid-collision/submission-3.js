class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let result = [];

        for (let asteroid of asteroids) {
            let destroyed = false;

            while (result.length) {
                let top = result.at(-1);

                // no collision cases
                if (top < 0 || asteroid > 0) {
                    break;
                }

                // collision happens: top > 0 && asteroid < 0
                if (top === -asteroid) {
                    result.pop();
                    destroyed = true;
                    break;
                } 
                else if (top > -asteroid) {
                    destroyed = true;
                    break;
                } 
                else {
                    result.pop();
                }
            }

            if (!destroyed) {
                result.push(asteroid);
            }
        }

        return result;
    }
}
