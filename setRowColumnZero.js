


function setRowColumnZero(matrix) {
    let rowCount = matrix.length
    let columnCount = matrix[0].length
    let zeroPositions = new Map()

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            
            if (matrix[i][j] === 0) {
                zeroPositions.set(i, j)
            }
        }
    }

    for (const [key, value] of zeroPositions) {

        for(let x = 0; x < columnCount; x++) {
            matrix[key][x] = 0
        }

        for (let y = 0; y < rowCount; y++) {
            // console.log(`matrix[${y}][${j}]`)
            matrix[y][value] = 0
        }
    }

    matrix.map((col) => {
        console.log(Math.log(...col))
    })
}

setRowColumnZero([
    [1,3,3],
    [5,0,7],
    [10,11,12]
])


setRowColumnZero([
    [0,3,5,6,9],
    [5,5,7,9,2],
    [4,3,2,5,7],
    [9,5,3,0,9]
])