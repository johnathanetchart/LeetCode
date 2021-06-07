/**
 * @param {string} s
 * @return {string}
 */
//input: s - string
//output: sorted - string - based on frequency of chars
var frequencySort = function(s) {
    //count the chars in obj - linear
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        if (counts[s[i]] === undefined) {
            counts[s[i]] = 1;
        } else {
            counts[s[i]]++;
        }
    }
    console.log(counts)
    let iterator = 1;
    let results = '';
    while(Object.keys(counts).length > 0) {
        console.log(Object.keys(counts))
        for(let key in counts) {
            if (counts[key] === iterator) {
                let amount = iterator;
                while (amount > 0) {
                    results = key + results;
                    amount--;
                }
                delete counts[key];
            }
        }
        iterator++;
    }
    
    //go through object.keys from 1 until max
    //delete as i go
    //return result
    return results;
};