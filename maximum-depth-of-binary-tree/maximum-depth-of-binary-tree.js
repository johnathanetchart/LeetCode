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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    let leftMax = 1;
    let rightMax = 1;
    if(root.left) {
        leftMax += maxDepth(root.left);
    }
    if(root.right) {
        rightMax += maxDepth(root.right);
    }
    if(leftMax > rightMax) {
        return leftMax;
    } else {
        return rightMax;
    }
};