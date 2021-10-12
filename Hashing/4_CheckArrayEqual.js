
/**
 * @param {nums[]} arr1 
 * @param {nums[]} arr2 
 * @returns {boolean}
 */
function areArraysEqual(arr1, arr2) {
    // If sizes are not equal, return false (just make sure)
    if (arr1.length !== arr2.length ) {
        return false
    }
    //Initialize hash maps to hold values and counts
    let hash1 = new Map()
    let hash2 = new Map()

    //fill the hash with array values and respective occurence counts
    for (let i = 0; i < arr1.length; i++) {
        if (hash1.has(arr1[i])) {
            hash1.set(arr1[i], hash1.get(arr1[i]) + 1 )
            continue
        }

        hash1.set(arr1[i], 1)
        
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (hash2.has(arr2[i])) {
            hash2.set(arr2[i], hash2.get(arr2[i]) + 1 )
            continue
        }

        hash2.set(arr2[i], 1)
        
    }

    //Check equality on elements and occurence
    for (const [key, value] of hash1) {
        if (hash2.get(key) !== value ) {
            return false
        }
    }
    
    return true
}


console.log(areArraysEqual([1,2,5,4,0,5], [5,2,4,5,0,1]))
console.log(areArraysEqual([1,2,5], [2,4,15]))


// Given two arrays A and B of equal size N, the task is to find if given arrays
//  are equal or not. Two arrays are said to be equal if both of them contain same 
//  set of elements, arrangements (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements must also be same
//  for two array to be equal.

// Expected Time Complexity : O(N)
// Expected Auxilliary Space : O(N)

// Constraints:
// 1<=N<=10^7
// 1<=A[],B[]<=10^18

// Example 1:

// Input:
// N = 5
// A[] = {1,2,5,4,0}
// B[] = {2,4,5,0,1}
// Output: true
// Explanation: Both the array can be 
// rearranged to {0,1,2,4,5}
// Example 2:

// Input:
// N = 3
// A[] = {1,2,5}
// B[] = {2,4,15}
// Output: false
// Explanation: A[] and B[] have only 
// one common value.