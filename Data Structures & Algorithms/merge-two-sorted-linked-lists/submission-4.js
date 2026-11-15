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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        // new head
        let head = new ListNode(0);
        let tail = head;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                // attach the smaller node
                tail.next = list1;
                list1 = list1.next;
            }
            else if (list1.val > list2.val) {
                tail.next = list2;
                list2 = list2.next;
            }

            tail = tail.next;
        }

        // attach the remaining lists
        if (list1) tail.next = list1;
        if (list2) tail.next = list2;

        // return start of the sorted list
        return head.next;
    }
}
