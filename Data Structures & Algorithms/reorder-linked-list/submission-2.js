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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find middle
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse second half
        let second = slow.next;
        slow.next = null; // split the list

        let prev = null;
        let curr = second;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // 3. Merge two halves
        let first = head;
        let secondHalf = prev;

        while (secondHalf) {
            let temp1 = first.next;
            let temp2 = secondHalf.next;

            first.next = secondHalf;
            secondHalf.next = temp1;

            first = temp1;
            secondHalf = temp2;
        }
    }
}
