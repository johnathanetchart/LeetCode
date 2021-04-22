/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // let results = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (results[nums[i]] === undefined) {
  //     results[nums[i]] = 1;
  //   } else {
  //     return true;
  //   }
  // }
  // return false;
  let results = [...new Set(nums)]
  if (results.length === nums.length) {
    return false;
  }
  return true;
};