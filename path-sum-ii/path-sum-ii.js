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
 * @return {number[][]}
 */

//input: root - node
//input2: targetSum - number
//output: array of arrays - each array is the values of a path that add up to targetSum
//constraints:
//edge: no children || no solutions = []

var pathSum = function(root, targetSum) {
    let results = [];
    
    let findPaths = (root, values) => {
        values.push(root.val);
        if(!root.left && !root.right) {
            //this is a leaf
            let sum = 0;
            for(let i = 0; i < values.length; i++) {
                sum += values[i];
            }
            if(sum === targetSum) {
                results.push(values);
            }
        }
        //left
        if(root.left) {
            findPaths(root.left, values.slice());
        }
        //right
        if(root.right) {
            findPaths(root.right, values.slice());
        }
    };
    if(root) {
        findPaths(root, []);  
    }
    
    //look at value
    //is it leaf?
        //yes - check sum
            //if sum = targetSum, push into output
        //no - add value to array and recurse on each
    
    return results;
    
};