class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if (!points.length) return [];

        let queue = new MinPriorityQueue((point) => point[0]);

        // get points
        for (let point of points) {
            let x = point[0];
            let y = point[1];
            // calculate distance
            let distance = Math.sqrt(x ** 2 + y ** 2);

            // add to priority queue
            queue.enqueue([distance, x, y]);
        }

        let result = [];
        // then return k most nearest points
        for (let i = 0; i < k; i++) {
            let [dist, x, y] = queue.dequeue();
            result.push([x, y]);
        }

        return result;
    }
}
