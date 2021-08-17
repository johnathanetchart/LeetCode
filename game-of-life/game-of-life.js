/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let numOfRows = board.length;
    let numOfCols = board[0].length;
    let instructions = [];
    for(let row = 0; row < numOfRows; row++) {
        
        for(let col = 0; col < numOfCols; col++) {
            let liveNeighbors = 0;
            let curr = board[row][col];
            if(row - 1 >= 0) { //prev row in bounds
                //top left
                if((col - 1 >= 0) && board[row - 1][col - 1] === 1) {
                    liveNeighbors++;
                }
                //check top
                if(board[row - 1][col] === 1) {
                    liveNeighbors++;
                }
                //top right
                if((col + 1 < numOfCols) && board[row - 1][col + 1] === 1) {
                    liveNeighbors++;
                }
            }
            //check left and right
            if((col - 1 >= 0) && board[row][col - 1] === 1) {
                liveNeighbors++;
            }
            if((col + 1 < numOfCols) && board[row][col + 1] === 1) {
                liveNeighbors++;
            }
            if(row + 1 < numOfRows) { //next row in bounds
                //bot left
                if((col - 1 >= 0) && board[row + 1][col - 1] === 1) {
                    liveNeighbors++;
                }
                //check bot
                if(board[row + 1][col] === 1) {
                    liveNeighbors++;
                }
                //bot right
                if((col + 1 < numOfCols) && board[row + 1][col + 1] === 1) {
                    liveNeighbors++;
                }
            }
            
            //use number of liveNeighbors to decide what to push to instructions
            if(board[row][col] === 1) { //live cell
                if(liveNeighbors < 2 || liveNeighbors > 3) {
                    //condition 1 & 3 - die
                    instructions.push([row, col, 0]);
                }
            }
            if(board[row][col] === 0 && liveNeighbors === 3) { //dead cell
                //condition 4 - come to life
                instructions.push([row, col, 1]);
            }
        }
    }
    // make the changes using instructions
    changeBoard(board, instructions);
    return board;
    
};

//helper function - can probably nest in main function
let changeBoard = (board, instructions) => {
    for(let i = 0; i < instructions.length; i++) {
        let instruction = instructions[i];
        let row = instruction[0];
        let col = instruction[1];
        let change = instruction[2];
        board[row][col] = change;
    }
};
