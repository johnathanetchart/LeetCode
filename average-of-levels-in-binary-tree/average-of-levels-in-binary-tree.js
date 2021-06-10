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
 * @return {number[]}
 */

//input: root - node
//output: 
//constraints:
//edge:

var averageOfLevels = function(root) {
    let queue = [root];
    let results = [];
    
    while(queue.length > 0) {
        let sum = 0;
        let count = 0;
        let temp = [];
    
        while(queue.length > 0) {
            let currentNode = queue.pop();
            sum += currentNode.val;
            count++;
            if(currentNode.left) {
                temp.push(currentNode.left);
            }
            if(currentNode.right) {
                temp.push(currentNode.right);
            }
        }
        queue = temp;
        results.push(sum / count);
    }
    return results;
    
    
    
    
    
    
    
    
//     //set up results
//     let results = [root.val];
//     //push root avg
    
//     //inner recursion(node)
//     let getChildrenAvg = (node) => {
//         let numOfChildren = (node.left ? 1 : 0) + (node.right ? 1 : 0);
//         if (numOfChildren !== 0) {
//             let avg = ((node.left ? node.left.val : 0) + (node.right ? node.right.val : 0)) / numOfChildren;
//             results.push(avg);
            
//             if(node.left) {
//                getChildrenAvg(node.left); 
//             }
//             if(node.right) {
//                 getChildrenAvg(node.right);
//             }
//         }
        
//     }
//     getChildrenAvg(root);
//     return results;
//         //get num of children
//         //if num of children is not 0
//             //calculate avg - add .left val and .right val / num of children
//             //push avg to results
//             // if left
//                 //recurse left
//             //if right
//                 //recurse right
    
//     //run it on root
};