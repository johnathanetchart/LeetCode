/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numCount = {};
    let results = [];
    for(let i = 0; i < nums.length; i++) {
        if (numCount[nums[i]] === undefined) {
            numCount[nums[i]] = 1;
        }
        else {
            results.push(nums[i]);
        }
    }
    return results;
};