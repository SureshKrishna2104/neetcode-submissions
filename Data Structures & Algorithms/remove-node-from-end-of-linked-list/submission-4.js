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
let second = head;
        let prev = null;
        while (second != null) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        
        // 'prev' is now the head of our reversed list. 
        // We use a dummy node to easily handle deleting the 1st node.
        let dummy = new ListNode(0);
        dummy.next = prev;
        let move = dummy;
        
        // Step 2: Move to the node right BEFORE the one we want to delete
        // Since we start at dummy, moving n times puts us exactly behind it.
        for (let i = 1; i < n; i++) {
            move = move.next;
        }
        
        // Delete the node
        move.next = move.next.next;
        
        // Step 3: Reverse the list back to original order
        let second2 = dummy.next; // Start from the actual head of the list
        let prev2 = null;
        while (second2 != null) {
            let temp = second2.next;
            second2.next = prev2;
            prev2 = second2;
            second2 = temp;
        }
        
        return prev2;
    }
}
