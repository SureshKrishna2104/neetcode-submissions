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
     * @return {ListNode}
     */
    reverseList(head) {
        let second = head;
        let prev=null;

        while(second!=null){
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        return prev;
    }
}
