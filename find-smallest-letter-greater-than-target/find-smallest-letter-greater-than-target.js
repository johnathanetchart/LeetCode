/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
//input: array of letters
//output: smallest character greater than target

//NOTE: letters wrap around
    //if answer index > letters.length - 1 -> subtract letters.length -1 to get index

var nextGreatestLetter = function(letters, target) {
    let s = 0;
    let e = letters.length - 1;
    let best = null;
    let ans = null;
    
    while(s <= e && !ans) {
        let m = Math.floor((s + e) / 2);
        let currVal = letters[m];
        console.log(m);
        console.log('current Value', currVal)
        console.log('target', target)
        if(target === currVal) {
            console.log('hit answer!', currVal)
            while(letters[m] === target) {
                ans = m + 1;
                m++;
            }
            console.log('new index', ans)
        }
        if(target > currVal) {
            //check right
            s = m + 1;
        }
        if(target < currVal) {
            best = m;
            e = m - 1;
        }
    }
    
    if(!ans) {
        if(!best) {
            ans = 0;
        } else {
            ans = best;
        }
    }
    if(ans > letters.length - 1) {
        ans -= letters.length;
    }
    return letters[ans];
};