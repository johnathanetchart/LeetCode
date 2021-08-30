/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    let results = [];
    nums = nums.sort((a, b) => a - b); //[ -4, -1, -1, 0, 1, 2 ]
    let left = 0;
    let right = nums.length - 1;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        left = i + 1;
        right = nums.length - 1;
        
        while(left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if( sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
            
        }
        
    }
    
    
    return results;
};
