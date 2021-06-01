/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //double speed counter
    let first = head;
    let second = head;
    while(second.next) {
        second = second.next;
        if (second.next) {
            second = second.next;
        }
        first = first.next;
    }
    return first
};