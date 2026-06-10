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
        const visitedNodes = new Set();
        while(head){
            visitedNodes.add(head);
            head = head.next;
            if(visitedNodes.has(head)){
                return true;
            }
        }
        return false;
    }
}
