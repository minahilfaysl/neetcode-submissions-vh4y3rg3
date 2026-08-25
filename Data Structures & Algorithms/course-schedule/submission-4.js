class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Build graph
        const list = Array.from(
            { length: numCourses },
            () => []
        );

        // Add courses and prerequisites to graph
        for (let [c, p] of prerequisites) {
            list[c].push(p);
        }

        let visited = new Set();

        function dfs(course) {
            // If this course is already in our current path,
            // we found a cycle
            if (visited.has(course)) return false;

            // No prerequisites left to check
            if (list[course].length === 0) return true;

            // Add course to current DFS path
            visited.add(course);

            for (let prereq of list[course]) {
                if (!dfs(prereq)) {
                    return false;
                }
            }

            // Remove from current path
            visited.delete(course);

            // Mark as fully processed
            list[course] = [];

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}