
function diagonalDifference(arr) {
    // Write your code here
    let sum_main_diagonal = 0
    let pointer = arr.length - 1
    let sum_second_diagonal = 0

    for (let i = 0; i < arr.length; i++){
        sum_main_diagonal += arr[i][i]
        sum_second_diagonal += arr[i][pointer--]
    }


    let difference = Math.abs(sum_main_diagonal - sum_second_diagonal)

    return difference

}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

console.log(diagonalDifference(matrix))