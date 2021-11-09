function miniMaxSum(arr) {
    // Write your code here

    let total_sum = arr.reduce((accumulator, current) => {
        return accumulator + current
    },0)
    // Get minimum value
    let minimum_value = Infinity
    for (let number of arr) {
        if(number < minimum_value) {
            minimum_value = number
        }
    }
    // Get maximum value
    let maximum_value = arr.reduce((accumulator, current) => {
        return Math.max(accumulator, current)
    },0)

    let maximum_sum = total_sum - minimum_value
    let minimum_sum = total_sum - maximum_value

    console.log(`${minimum_sum} ${maximum_sum}`)
}

miniMaxSum([1,3,5,7,9])