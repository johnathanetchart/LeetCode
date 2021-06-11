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

var minDepth = function(root) {
    let depth = 0;
    let queue = [];
    if(!root) {
        return 0;
    }
    queue.push(root)
    
    while(queue.length > 0) {
        depth ++;
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let current = queue.shift();
            if(!current.left && !current.right) {
                return depth;
            }
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
        //loop
            //shift off queue size times
            //add left to queue
            //add right to queue
    }
    //return depth - 1;
};