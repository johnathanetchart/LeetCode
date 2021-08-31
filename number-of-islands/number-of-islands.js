/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    //start island count at 0
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let queue = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                queue = [[i, j]];
                grid[i][j] = '0';
                while(queue.length > 0) {
                    let current = queue.shift();
                    let row = current[0];
                    let column = current[1];
                    // grid[row][column] = '0';
                    if(row - 1 >= 0 && grid[row - 1][column] === '1') {
                        queue.push([row - 1, column]);
                        grid[row - 1][column] = '0';
                    }
                    if(row + 1 < m && grid[row + 1][column] === '1') {
                        queue.push([row + 1, column]);
                        grid[row + 1][column] = '0';
                    }
                    if(column - 1 >= 0 && grid[row][column - 1] === '1') {
                        queue.push([row, column - 1]);
                        grid[row][column - 1] = '0';
                    }
                    if(column + 1 < n && grid[row][column + 1] === '1') {
                        queue.push([row, column + 1]);
                        grid[row][column + 1] = '0';
                    }
                    
                }
            }
        }
    }
    return count;
    //loop through matrix
        //if i find a 1
            //bfs?
            //increment island count
            //create an queue with current row / column
            //while queue.length > 0;
                //set current to 0
                //add all neighbors row/column that are 1s to queue
                //set current to queue.shift()
            
            //recursively check neighbors until no neighbors are 1s
            //i think we can just change all of them to 0s to prevent reuse.
            
    
    //return count
};

/*
input: array of array
output: number of islands
constraints:    each island connnected nesw
                diagonals don't count
                
ex:
grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
*/