
function gridChallenge(grid) {
    // Write your code here

    // return an array version of each sorted element of the grid
    let sortedGridArrays = grid.map((element) => {
        let elementArray = element.split('')
        return elementArray.sort()
    })

    //check if each column of sortedGridArrays is sorted
    for (let i = 0; i < sortedGridArrays.length; i++) {
        
        let columnArray = sortedGridArrays.map((el) => {
            return el[i]
        })

        let columnArrayString = columnArray.join('')

        if (columnArrayString !== columnArray.sort().join('')) {
            return 'NO'
        }
    }

    return 'YES'
    
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))