// Given two lists V1 and V2 of sizes n and m respectively.
//  Return the list of elements common to both the lists and 
//  return the list in sorted order. Duplicates may be there in the output list.

// Example:

// Input:
// n = 5
// v1[] = {3, 4, 2, 2, 4}
// m = 4
// v2[] = {3, 2, 2, 7}
// Output:
// 2 2 3
// Explanation:
// The common elements in sorted order are {2 2 3}

//! Following solution won't include duplcates in output
function commonElement(v1, v2) {
    // Initialize hash maps to store values
    let hashMap1 = new Map()
    let hashMap2 = new Map()

    //Initialize array to contain final list
    let foundCommon = []

    for (let value of v1) {
        hashMap1.set(value, value)
    }

    for (let value of v2) {
        hashMap2.set(value, value)
    }

    //check and return elemnts of v1 found in v2
    for ( let [key, value] of hashMap1) {
        if (hashMap2.has(key)) {
            foundCommon.push(value)
        }
    }

    let sortedCommonFound = foundCommon.sort((a, b) => {
        return a - b
    })

    return sortedCommonFound
}

console.log(commonElement([3, 4, 2, 2, 4], [3, 2, 2, 7]))
console.log(commonElement([1,2,3], [2,3,4]))
