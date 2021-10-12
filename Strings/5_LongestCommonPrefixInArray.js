// Given an array of N strings, find the longest common prefix among all strings present
//  in the array.

//  returns the longest common prefix common in all the strings in the array.
//   If there's no prefix common in all the strings, return "-1".

// Example 1:

// Input:
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
// Output: gee
// Explanation: "gee" is the longest common
// prefix in all the given strings.
// Example 2:

// Input: 
// N = 2
// arr[] = {hello, world}
// Output: -1
// Explanation: There's no common prefix
// in the given strings.

// Expected Time Complexity: O(N*max(|arri|)).
// Expected Auxiliary Space: O(max(|arri|)) for result.


// Constraints:
// 1 ≤ N ≤ 103
// 1 ≤ |arri| ≤ 103

/**
 * 
 * @param {string[]} arr 
 * @returns {string}
 */
function longestCommonPrefix(arr) {
    if (arr.length === 0) { return ""}

    if (arr.length === 1) { return arr[0]}
    
    //*The longest common prefix is the common prefix between the two most dissimilar strings
    //* Hence sorting the array to get the most dissimilar being first and last elements
    // sort the array
    arr.sort()

    //Find length of shortest element between the two
    let shortestLength = Math.min(arr[0].length, arr[arr.length - 1].length)
    let first = arr[0]
    let last = arr[arr.length - 1]
    let commonPrefixArray = []

    // Initialize variable to count number of similar strings @prefix
    for (let i = 0; i < shortestLength; i++) {
        if(first[i] === last[i]) {
            commonPrefixArray.push(first[i])
        } else {
            // Once equality is not satisfied,longest common prefix ends
            break
        }
    }

    if (commonPrefixArray.length === 0) {
        return -1
    }

    return commonPrefixArray.join("")

}

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]))
console.log(longestCommonPrefix(["hello", "helrld"]))