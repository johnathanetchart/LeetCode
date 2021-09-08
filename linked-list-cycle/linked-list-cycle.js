/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //slow pointer on head
    //fast pointer goes until it hits null OR slow pointer.next
        //if it hits slow pointer.next
            //return true;
        //if it hits null;
            //slow pointer up 1
            //fast pointer is slow pointer.next
            //go again
    
    let slow = head;
    if(!head || head.next === null) {
        return false;
    }
    let fast = head.next;
    while(slow !== null) {
        if(fast === null || fast.next === null) {
            return false;
        }
        if(slow === fast || slow === fast.next) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
};