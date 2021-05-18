/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // let sorted = nums.sort((a,b) => a - b);
    // console.log(sorted)
    let numSet = new Set(nums);
    // console.log(numSet.has(1))
    let missing = [];
    for ( let i = 1; i <= nums.length; i++) {
        // if (!nums.includes(i)) {
        //     missing.push(i);
        // }
        if(!numSet.has(i)) {
            missing.push(i)
        }
    }
    return missing;
};