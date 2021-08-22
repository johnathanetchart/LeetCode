/**
 * @param {number[]} nums
 * @return {number}
 */

// [1 , 2, 3, 1]

//i = 0
    //prev max is 0;
    //i can rob 0 or 1

//i = 1
    //check if 0 was robbed
        //if yes, skip
        //if not, 
//i = 2

//i = 3
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    let max = [];
    max.push(nums[0]);
    max.push(Math.max(nums[0], nums[1]));
    let prev;
    for (let i = 2; i < nums.length; i++) {
        max.push(Math.max(max[i - 1], nums[i] + max[i-2]));
    }
    // console.log(max);
    return max[max.length - 1];
};