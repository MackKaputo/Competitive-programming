// Given a string S, find length of the longest substring with all distinct characters. 

// Example 1:

// Input:
// S = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest 
// substring with all distinct characters.
// â€‹Example 2:

// Input: 
// S = "aaa"
// Output: 1
// Explanation: "a" is the longest substring 
// with all distinct characters.
// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(K), where K is Constant.


// Constraints:
// 1<=|S|<=105
/**
 * 
 * @param {String} str 
 * @returns {number}
 */
function longestSubstrDistinctChars(str) {
    let start = 0
    let strLength = str.length
    let maxThusFar = 0
    let maxHere = 0

    let hash = {}

    if (str.length === 1 ) { return 1}

    if (str.length === 0) { return 0 }

    for (let i = 0; i < strLength; i++) {

        if (hash[str[i]] !== undefined ) {
            maxHere = i - start
            start++
        }

        hash[str[i]] = str[i]

        if(maxThusFar <= maxHere ) {
            maxThusFar = maxHere
        }

    }

    if (start === 0) {
        return str.length
    }

    return maxThusFar
}

console.log(longestSubstrDistinctChars("hello"))
console.log(longestSubstrDistinctChars("aaa"))
console.log(longestSubstrDistinctChars("geeksforgeeks"))
console.log(longestSubstrDistinctChars("pa"))