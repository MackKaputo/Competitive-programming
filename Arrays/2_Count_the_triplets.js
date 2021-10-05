// Given an array of distinct integers. The task is to count all the triplets 
// such that sum of two elements equals the third element.
 
// Example 1:

// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets: 
// 1 + 2 = 3 and 3 +2 = 5 
// â€‹Example 2:

// Input: 
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ N ≤ 103
// 1 ≤ arr[i] ≤ 105

function CountTheTriplets(arr, n) {
    let foundTripletsCount = 0;
    let sum = 0;

    for (let i = 0; i < n; i++ ) {
        for (let j = i + 1; j < n; j++) {
           
            sum  = arr[i] + arr[j]

            //console.log(`${arr[i]} + ${arr[j]} = ${sum}`)
            let check = arr.find((element) => element === sum)
            
            // Increase counter if check is not undefined
            if(check !== undefined) {
                foundTripletsCount++
            }
            
        }
    }

    return foundTripletsCount
}

console.log(CountTheTriplets([1, 2, 3, 4, 5], 5))