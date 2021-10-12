// Given a string without spaces, the task is to remove duplicates from it.

// Note: The original order of characters must be kept the same. 

// Example 1:

// Input: S = "zvvo"
// Output: "zvo"
// Explanation: Only keep the first
// occurrence
// Example 2:

// Input: S = "gfg"
// Output: gf
// Explanation: Only keep the first occurrence
// Expected Time Complexity: O(|s|)
// Expected Auxiliary Space: O(constant)

// Constraints:
// 1 <= |S| <= 10^5
// S contains lowercase english alphabets

//* SOLUTION 1: USING HASH ( more EFFICIENT O(n))

function removeDups(str) {
    //initialise hash
    let hash = {}
    let finalStringArray = []
    
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]] !== undefined) {
            continue
        }

        hash[str[i]] = str[i]
        finalStringArray.push(str[i])
    }

    return finalStringArray.join("")
}


//* SOLUTION 2: USING SET  O( nlog(n) )
/**
 * 
 * @param {string} str
 * @returns {string} 
 */
function removeDups2(str) {
    
    // create a set from the string to contain unique values
    let uniqueValues = new Set(str)
    // Initialize array for the unique values
    let uniqueValuesArray = new Array(uniqueValues.length)
    //create array from the set
    for (value of uniqueValues) {
        uniqueValuesArray.push(value)
    }

    //Join values of unique strings from uniqueValuesArray and return it

    return uniqueValuesArray.join("")

   
}


console.log(removeDups("gfg"))
console.log(removeDups("zvvo"))
console.log(removeDups("deboflorenc"))
console.log("\n")

console.log(removeDups2("gfg"))
console.log(removeDups2("zvvo"))
console.log(removeDups2("deboflorenc"))
