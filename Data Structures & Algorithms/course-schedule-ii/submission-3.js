class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const list = Array.from( // adjacency list where direction is prereq to course
            { length: numCourses },
            () => []
        );

        const indegree = Array(numCourses).fill(0);
        const q = new Queue();
        const result = [];

        // populate both the graph and the indegree list
        for (let [c, p] of prerequisites) {
            // p -> c
            list[p].push(c);
            indegree[c]++;
        }


        // add all courses with no prerequisites to queue
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                q.push(i);
            }
        }

        // process courses with indegree 0
        while (!q.isEmpty()) {

            // take a course with no remaining prerequisites
            let node = q.pop();

            // add it to our valid course order
            result.push(node);

            // look at courses that depend on this course
            for (let p of list[node]) {

                // this prerequisite is now completed
                indegree[p]--;

                // if all prerequisites are completed,
                // this course can now be taken
                if (indegree[p] === 0) {
                    q.push(p);
                }
            }
        }

        // if we processed all courses, return the order
        // otherwise, there must be a cycle
        return result.length === numCourses ? result : [];
    }
}