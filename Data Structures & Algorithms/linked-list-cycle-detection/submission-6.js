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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false;

        let slow = head;
        let tail = head;

        while (tail && tail.next) {
            slow = slow.next;
            tail = tail.next.next;

            if (slow === tail) {
                return true;
            }
        }

        return false;
    }
}
