
function findMedian(arr) {
    // Write your code here
    
    //sort array
    arr.sort((a,b) => a - b)

    let index_median = Math.floor(arr.length / 2)

    return arr[index_median]

}

console.log(findMedian([2,1,8,7,9]))


/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
 //! solution explained: 
 //! https://www.geeksforgeeks.org/maximize-sum-n-x-n-upper-left-sub-matrix-given-2n-x-2n-matrix/

function flippingMatrix(matrix) {
    // Write your code here
    let sum = 0;
    let matrix_length = matrix.length
   
    for (let i = 0; i < matrix_length / 2; i++) {
        for (let j = 0; j < matrix_length / 2; j++) {
            let r1 = i;
            let r2 = matrix_length - i - 1;
            let c1 = j;
            let c2 = matrix_length - j - 1;

            // We can replace current cell [i, j]
            // with 4 cells without changing affecting
            // other elements.
            sum += Math.max(Math.max(matrix[r1][c1], matrix[r1][c2]),
                    Math.max(matrix[r2][c1], matrix[r2][c2]));
        }
    }

    return sum;

}

let x = [
    [112,42,83,119],
    [56,125,56,49],
    [15,78,101,43],
    [62,98,114,108]
]

console.log(flippingMatrix(x))