/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowLog = [];
    let columnLog = [];
    //loop through
    for( let i = 0; i < matrix.length; i++) {
        for( let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                rowLog.push(i);
                columnLog.push(j);
            }
        }
    }
    //if 0, log row and column
    
    //1 way: negative- needs another loop
        //loop through, 
        //check columns and rows
        //if in log, set to 0
    //2nd way: constant time
        //just use logs
    for(let i = 0; i < rowLog.length; i++) {
        for(let index = 0; index < matrix[0].length; index++) {
            matrix[rowLog[i]][index] = 0;
        }
    }
    for(let i = 0; i < columnLog.length; i++) {
        for(let index = 0; index < matrix.length; index++) {
            matrix[index][columnLog[i]] = 0;
        }
    }
        //loop through row logs
            //while < max amount
                //set matrix[row][i] = 0
        //loop through column logs
            //while < max amount
                //set matrix[i][row] = 0
};