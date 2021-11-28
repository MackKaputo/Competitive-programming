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
    var n = str.length ;
     
    // Result
    var res = 0;
     
    for(var i = 0; i < n; i++)
    {
         
        // Note : Default values in visited are false
        var visited = [];
         
        for(var j = i; j < n; j++)
        {
             
            // If current character is visited
            // Break the loop
            if (visited[str.charAt(j)] == true)
                break;
 
            // Else update the result if
            // this window is larger, and mark
            // current character as visited.
            else
            {
                res = Math.max(res, j - i + 1);
                visited[str.charAt(j)] = true;
            }
        }
 
        // Remove the first character of previous
        // window
        visited[str.charAt(i)] = false;
    }
    return res;
}



console.log(longestSubstrDistinctChars("hello"))
console.log(longestSubstrDistinctChars("aaa"))
console.log(longestSubstrDistinctChars("geeksforgeeks"))
console.log(longestSubstrDistinctChars("pa"))
console.log(longestSubstrDistinctChars("pwwkew"))