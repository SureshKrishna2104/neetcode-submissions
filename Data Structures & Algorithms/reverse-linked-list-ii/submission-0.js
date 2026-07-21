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
        const reverseList = (head) => {
            let prev = null;
            let curr = head;

            while (curr) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            return prev;
        };

        const dummy = new ListNode(0, head);
        let prev = dummy;
        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        const sublistHead = prev.next;
        let sublistTail = sublistHead;
        for (let i = 0; i < right - left; i++) {
            sublistTail = sublistTail.next;
        }

        const nextNode = sublistTail.next;
        sublistTail.next = null;
        prev.next = reverseList(sublistHead);
        sublistHead.next = nextNode;

        return dummy.next;
    }
}