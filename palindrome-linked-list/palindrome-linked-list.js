/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//input: head of singly linked list
//output: boolean - is palindrome? true/false

var isPalindrome = function(head) {
    let list = [];
    let current = head;
    while(current) {
        list.push(current.val);
        current = current.next;
    }
    // console.log(list)
    let i = 0;
    let j = list.length - 1;
    
    while(i <= j) {
        if(list[i] !== list[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};