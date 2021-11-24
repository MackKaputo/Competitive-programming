// Given an array having both positive and negative integers. 
// The task is to compute the length of the largest subarray with sum 0.

// Example 1:

// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 1 <= N <= 105
// -1000 <= A[i] <= 1000, for each valid i


//! Geeks for geeks proposed solution
function maxLength(arr) {

    // Creates an empty hashMap hM
    let hM = new Map();
  
    let sum = 0; // Initialize sum of elements
    let max_len = 0; // Initialize result

    // Traverse through the given array
    for (let i = 0; i < arr.length; i++) {
        // Add current element to sum
        sum += arr[i];

        if (arr[i] == 0 && max_len == 0)
            max_len = 1;

        if (sum == 0)
            max_len = i + 1;
        
        // Look this sum in hash table
        let prev_i = hM.get(sum);

        // If this sum is seen before, then update max_len
        // if required
        if (prev_i != null)
            max_len = Math.max(max_len, i - prev_i);
        else // Else put this sum in hash table
            hM.set(sum, i);
    }

    return max_len
}

console.log(maxLength([2,3,-2,-1, 20,6,-2,0,-3,-1]))