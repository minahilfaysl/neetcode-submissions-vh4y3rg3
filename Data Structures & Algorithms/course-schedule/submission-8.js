class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Adjency list
        const graph = Array.from(
            { length: numCourses },
            () => [], // new array for each course
        )

        // Populate graph with prerequisites
        for (let [c, p] of prerequisites) {
            graph[c].push(p);
        }

        // Create a visited set
        const visited = new Set()

        // DFS for course paths
        function dfs(course) {
            // Cycle detection - impossible case
            if (visited.has(course)) return false;

            // Check if path is complete
            if (graph[course].length === 0) return true;

            visited.add(course);
            // Iterate over all prereqs
            for (let prereq of graph[course]) {
                if (!dfs(prereq)) return false;
            }

            // Complete path
            visited.delete(course);
            graph[course] = [];
            return true;
        }

        // Iterate over all courses and prerequisites
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;

    }
}
