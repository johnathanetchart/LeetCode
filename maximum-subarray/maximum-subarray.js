/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    //
    //
    let bigSum = nums[0];
    let currSum = bigSum;
    for(let i = 0; i < nums.length; i++) {
        currSum = nums[i];
        if(currSum > bigSum) {
            bigSum = currSum;
        }
        for(let j = i + 1; j < nums.length; j++) {
            currSum += nums[j];
            if(currSum > bigSum) {
                bigSum = currSum;
            }
        }
    }
    return bigSum;
};