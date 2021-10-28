// Given an unsorted array A of size N that contains only 
// non-negative integers, find a continuous sub-array which 
// adds to a given number S.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 1 3
// Explanation: The sum of elements 
// from index 1 to index 3 position 
// is 12.

//! APPROACH with O(n)
function subarrayWithGivenSum(arr, target) {
    let current_sum = 0;
    let start = 0;
    let n = arr.length
 
    for (let i = 0; i < n; i++) {
        current_sum = current_sum + arr[i]

        while (current_sum > target && start < i) {
            current_sum = current_sum - arr[start]
            start++
        }

        if (current_sum === target) {
            return [start , i ]
        }
    }

    return -1
}


console.log(subarrayWithGivenSum([1,2,3,7,5], 15))