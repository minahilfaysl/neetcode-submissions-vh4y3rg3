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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (left === right) return head;

        // Dummy helps when left === 1
        const dummy = new ListNode(0);
        dummy.next = head;

        // Find the node before the reversal
        let before = dummy;

        for (let i = 1; i < left; i++) {
            before = before.next;
        }

        // First node of the section we're reversing
        let curr = before.next;

        // Move nodes one-by-one to the front
        for (let i = 0; i < right - left; i++) {
            let next = curr.next;

            curr.next = next.next;
            next.next = before.next;
            before.next = next;
        }

        return dummy.next;
    }
}
