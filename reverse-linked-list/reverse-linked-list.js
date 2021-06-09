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
var reverseList = function(head) {
    if(head) {
    //have to get to end to get new head
        let list = [];
        let current = head;
        while(current) {
            list.push(current);
            current = current.next;
        }
        let newHead = list[list.length - 1];
        for(let i = list.length - 1; i >= 0; i--) {
            list[i].next = list[i - 1];
        }
        list[0].next = null;

        return newHead;
    }
    return head;
};