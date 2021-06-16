/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    //
    let maxSub = 0;
    let currMax = 0;
    let noPos = true;
    let bigNeg = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        //need to check if there were ever any positives
        if(nums[i] >= 0) {
            noPos = false;
        }
        if(nums[i] < 0 && nums[i] > bigNeg) {
            bigNeg = nums[i];
        }
        currMax += nums[i];
        if(currMax < 0) {
            currMax = 0;
        }
        if(currMax > maxSub) {
            maxSub = currMax;
        }
        
    }
    if(noPos === true) {
        return bigNeg;
    }
    return maxSub;
    
    
    
    
    
    
    // O(n2)
    // let bigSum = nums[0];
    // let currSum = bigSum;
    // for(let i = 0; i < nums.length; i++) {
    //     currSum = nums[i];
    //     if(currSum > bigSum) {
    //         bigSum = currSum;
    //     }
    //     for(let j = i + 1; j < nums.length; j++) {
    //         currSum += nums[j];
    //         if(currSum > bigSum) {
    //             bigSum = currSum;
    //         }
    //     }
    // }
    // return bigSum;
};