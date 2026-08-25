class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build graph
        const list = Array.from(
            { length: numCourses },
            () => [],
        )

        // add courses and prereqs to graph
        for (let [c, p] of prerequisites) {
            list[c].push(p);
        }

        let visited = new Set()

        function dfs(course) {
            // cycle detection
            if (visited.has(course)) return false;

            console.log(list[course], course)

            // ONLY CHANGE
            if (list[course].length === 0) return true;

            visited.add(course);

            for (let prereq of list[course]) {
                let result = dfs(prereq);

                if (!result) return false;
            }
            
            visited.delete(course);
            list[course] = [];
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            let result = dfs(i);

            if (!result) return false;
        }

        return true;
    }
}