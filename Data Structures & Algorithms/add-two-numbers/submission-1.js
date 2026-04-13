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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode();
        let result = head;
        let carry = new ListNode();

        while (l1 || l2 || carry.val) {
            let sum = 0;

            if (l1) sum += l1.val;
            if (l2) sum += l2.val;
            if (carry) sum += carry.val;

            // update values with sum
            result.val = sum % 10;

            // calculate new carry
            carry.next = new ListNode();
            carry = carry.next; 
            carry.val = Math.floor(sum / 10);

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;

            // create a new node for result if any values are left
            if (l1 || l2 || carry.val) {
                result.next = new ListNode();
                result = result.next;
            }
        }

        return head;
    }
}
