/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    
    let ignorelast = nums.slice(0, nums.length - 1);
    let ignorefirst = nums.slice(1);
    console.log(ignorelast)
    console.log(ignorefirst)
    return Math.max(robPass(ignorelast), robPass(ignorefirst));
};

const robPass = (nums) => {
    if(nums.length === 1) {
        return nums[0];
    }
    let max = [nums[0], Math.max(nums[0], nums[1])];
    
    for(let i = 2; i < nums.length; i++) {
        max.push(Math.max(max[i - 1], nums[i] + max[i - 2]));
    }
    return max[max.length - 1];
}
