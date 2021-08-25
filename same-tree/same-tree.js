/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //check if values are the same
    if(p === null && q === null) {
        return true;
    }
    if(p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    //check if they both have a left
    if(p.left && q.left) {
        
    }
    
    //check if they both have a right
    if(p.right && q.right) {
        
    }
    //recurse
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // if(p === null && q === null) {
    //     return true;
    // }
    // if(p === null || q === null) {
    //     return false;
    // }
    // if(p.val != q.val) {
    //     return false;
    // }
    // return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};