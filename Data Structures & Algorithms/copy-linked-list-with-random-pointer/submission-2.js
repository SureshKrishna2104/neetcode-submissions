// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // phase 1 -> creating the clone to next to each other.
        if (head === null) {
    return null;
}
   let curr = head;
while (curr !== null) {
    let nextNode = curr.next; // Bookmark the original next node
    
    let clone = new Node(curr.val); // Create the clone node
    curr.next = clone;              // Insert clone after original
    clone.next = nextNode;          // Link clone to the original next
    
    curr = nextNode; // Move forward 2 steps to the next original node
}
        // A->A->B->b
curr = head;
while (curr !== null) {
    if (curr.random !== null) {
        // The clone's random points to the original's random's clone!
        curr.next.random = curr.random.next;
    }
    curr = curr.next.next; // Skip the clone, move to next original
}
curr = head;
let cloneHead = head.next; // Save the start of our new cloned list
let currClone = cloneHead;

while (curr !== null) {
    curr.next = curr.next.next; // Restore original node's next pointer
    
    if (currClone.next !== null) {
        currClone.next = currClone.next.next; // Link clone node to next clone
    }
    
    curr = curr.next;           // Move original pointer forward
    currClone = currClone.next; // Move clone pointer forward
}
return cloneHead;
    }
}
