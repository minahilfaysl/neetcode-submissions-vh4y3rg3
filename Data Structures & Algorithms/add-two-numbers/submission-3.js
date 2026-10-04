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
        let head = new ListNode(0, null);
        let result = head;
        let carry = 0;

        while (l1 || l2 || carry) {
            let sum = 0;

            // calculate sum
            if (l1) sum += l1.val;
            if (l2) sum += l2.val;
            if (carry) sum += carry;

            result.val = sum % 10;
            carry = Math.floor(sum / 10);

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;

            if (l1 || l2 || carry) {
                result.next = new ListNode();
                result = result.next;
            }
        }

        return head;
    }
}
