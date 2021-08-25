/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null) {
        return false;
    }
    
    //if it's a leaf, we can check the val
    if(!(root.left || root.right)) {
        if(root.val === targetSum) {
            return true;
        }
        return false;
    }
        //if val === sum
            //return true;
        //else return false;
    //if it's not a leaf, 
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};