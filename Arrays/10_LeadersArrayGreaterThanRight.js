// Given an array A of positive integers. Your task is to find the leaders in the array. 
// An element of array is leader if it is greater than or equal to all the elements to its
//  right side. The rightmost element is always a leader. 
// Example 1:

// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.

/** 
 * @param {nums[]} arr 
 */
function leaders(arr) {
    let arraySize = arr.length
    // initilize array of found leaders with last element
    let foundLeaders = [arr[arraySize - 1]]
    // Initialize maximum as the last element, so we look for the number greater than it
    let max = arr[arraySize - 1]

    //loop from the array from right side
    for ( let i = arraySize - 2; i >= 0; i-- ) {
        if (arr[i] > max) {
            foundLeaders.push(arr[i])
            //update maximum to look for next number greater than current
            max = arr[i]
        }
    }
    // reverse to return original order in which they occur in the initial array
    foundLeaders.reverse()

    return foundLeaders
}

console.log(leaders([16,17,4,3,5,2]))
console.log(leaders([15,4,5,10,3,9,7,2]))