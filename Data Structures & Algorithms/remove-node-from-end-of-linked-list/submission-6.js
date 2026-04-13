/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let dummy = new ListNode(0, head);
        let length = 0;
        let curr = head;

        // 1️⃣ Find length
        while (curr) {
            length++;
            curr = curr.next;
        }

        // 2️⃣ Find node BEFORE the one to remove
        let steps = length - n;
        curr = dummy;

        for (let i = 0; i < steps; i++) {
            curr = curr.next;
        }

        // 3️⃣ Remove node
        curr.next = curr.next.next;

        return dummy.next;
    }
}
