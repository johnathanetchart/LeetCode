/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2;
    }
    if(!l2) {
        return l1;
    }
    let l1Curr = l1;
    let l2Curr = l2;
    let resultsHead = null;
    let results = null;
    
    while(l1Curr || l2Curr) {
        if((l1Curr && l2Curr && l1Curr.val <= l2Curr.val) || l2Curr === null) {
            if(!resultsHead) {
                resultsHead = new ListNode(l1Curr.val);
                results = resultsHead;
            } else {
                results.next = new ListNode(l1Curr.val);
                results = results.next;
            }
            l1Curr = l1Curr.next;
        } else if((l1Curr && l2Curr && l1Curr.val > l2Curr.val) || l1Curr === null) {
            if(!resultsHead) {
                resultsHead = new ListNode(l2Curr.val);
                results = resultsHead;
            } else {
                results.next = new ListNode(l2Curr.val);
                results = results.next;
            }
            l2Curr = l2Curr.next;
        }
    }
    return resultsHead;
};