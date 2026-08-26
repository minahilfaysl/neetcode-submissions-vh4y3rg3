class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const list = Array.from(
            { length: numCourses },
            () => []
        );

        // course -> prerequisites
        for (const [p, c] of prerequisites) {
            list[c].push(p);
        }

        function dfs(target, current, visited) {
            // Found the prerequisite we're looking for
            if (target === current) return true;

            if (visited.has(current)) return false;

            visited.add(current);

            for (const prereq of list[current]) {
                if (dfs(target, prereq, visited)) {
                    return true;
                }
            }

            return false;
        }

        const answers = [];

        for (const [prereq, course] of queries) {
            const visited = new Set();

            answers.push(
                dfs(prereq, course, visited)
            );
        }

        return answers;
    }
}
