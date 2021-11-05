function countingSort(arr) {
    // Write your code here
    let frequency_array = new Array(100).fill(0)

    for (let value of arr){
        frequency_array[value] += 1
    }

    return frequency_array

}
