class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const list = Array.from(
            { length: numCourses },
            () => []
        );

        const indegree = Array(numCourses).fill(0);

        for (let [c, p] of prerequisites) {
            // prereqs before courses
            list[p].push(c);
            indegree[c]++;
        }

        let q = new Queue();

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                q.push(i);
            }
        }

        let result = [];

        while (!q.isEmpty()) {
            let node = q.pop();
            result.push(node);

            let prereqs = list[node];

            for (let p of prereqs) {
                indegree[p]--;

                if (indegree[p] === 0) {
                    q.push(p);
                }
            }
        }

        // ADD THIS
        return result.length === numCourses ? result : [];
    }
}