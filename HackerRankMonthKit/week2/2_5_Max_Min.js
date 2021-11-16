
function maxMin(k, arr) {
    // Write your code here
    arr.sort((a,b) => a - b)
    let diff_arr = []

    let i = 0

    while (k + i <= arr.length) {
        diff_arr.push(arr[(k+i) - 1] - arr[i])
        i += 1
    }

    let minimum = diff_arr.reduce((a, b) => {
        return Math.min(a, b)
    })

    return minimum

}

// You will be given a list of integers, arr , and a single integer k.
//  You must create an array of length k from elements of arr such that 
//  its unfairness is minimized. Call that array arr'. Unfairness of an 
//  array is calculated as
//                             max(arr') - min(arr')
// Where:
// - max denotes the largest integer in arr'
// - min denotes the smallest integer in arr'
// Example
//     arr = [1,4,7,2]
//     k = 2
// Pick any two elements, say arr' = [4, 7].
// unfairness = max(4,7) - min(4,7) = 7 - 4 = 3
// Testing for all pairs, the solution [1,2] provides the minimum unfairness.

// Note: Integers in arr may not be unique.



console.log(maxMin(2, [1, 4, 7, 2]))