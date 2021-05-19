/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     let sorted = nums.sort();
//     let paired;
//     for (let i = 0; i < sorted.length; i++) {
//         paired = false;
//         for (let j = 0; j < sorted.length; j++) {
//             if(i !== j && sorted[i] === sorted[j]) {
//                 paired = true;
//             }
//         }
//         if(paired === false) {
//             return sorted[i];
//         }
        
//     }
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        if(numsObj[nums[i]] === undefined) {
            numsObj[nums[i]] = nums[i];
        } else {
            delete numsObj[nums[i]];
        }
    }
    let key = Object.keys(numsObj)[0];
    return numsObj[key];
}