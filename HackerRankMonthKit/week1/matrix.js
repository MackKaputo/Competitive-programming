let x = [
    [1,2,3,4],
    [10,11,12,13],
    [20,21,22,23],
    [30,31,32,33]
]

function getColumn(arr, colNumber){
    let my_column = []

    for (let i = 0; i < arr.length; i++){
        my_column.push(x[i][colNumber])
    }

    return my_column
}

function uppperLeftSum(arr){
    let upper_left_sum = 0
    let arrayLength = arr.length

    for(let i = 0; i < arrayLength/2 ; i++){
        for (let j = 0; j < arrayLength/2 ; j++){
            upper_left_sum += x[i][j]
        }
    }

    return upper_left_sum
}




x[0] = x[0].reverse()
console.log(x[0])
console.log(uppperLeftSum(x))
