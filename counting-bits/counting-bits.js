/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let results = [];

 //loop from 0 to num

 for (let i = 0; i <= num; i++) {

  let binary = i.toString(2);

  let count = 0;

  for(let j = 0; j < binary.length; j++) {

   if(binary[j] === '1') {

    count++;

   }

  }

  results.push(count);

 }

  //get binary form

  //loop through string

  //get count of 1s

  //push to results



 return results;
};