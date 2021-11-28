// Given two strings a and b consisting of lowercase characters. 
// The task is to check whether two given strings are an anagram of each other or not. 
// An anagram of a string is another string that contains the same characters, 
// only the order of characters can be different. For example, “act” and “tac” are 
// an anagram of each other.

// Example 1:

// Input:
// a = geeksforgeeks, b = forgeeksgeeks
// Output: YES
// Explanation: Both the string have same
// characters with same frequency. So, 
// both are anagrams.
// Example 2:

// Input:
// a = allergy, b = allergic
// Output: NO
// Explanation:Characters in both the strings
// are not same, so they are not anagrams.
// Expected Time Complexity: O(|a|+|b|).
// Expected Auxiliary Space: O(Number of distinct characters).

// Note: |s| represents the length of string s.

// Constraints:
// 1 ≤ |a|,|b| ≤ 10^5

//! Linear complexity with hashMap
function isAnagram2(string1, string2) {
    if (string1.length !== string2.length) {
        return "NO"
    }

    let hash1 = new Map()
    let hash2 = new Map()

    for (let char of string1) {
        if (hash1.has(char)) {
            hash1.set(char, hash1.get(char) + 1)
        } else {
            hash1.set(char, 1)
        }
    }

    for (let char of string2) {
        if (hash2.has(char)) {
            hash2.set(char, hash2.get(char) + 1)
        } else {
            hash2.set(char, 1)
        }
    }

    for (const [key, value] of hash1) {
        if (hash2.get(key) !== value) {
            return "NO"
        }
    }

    return "YES"
}


//! O(n * m) : with n length of string1 and m length of string 2
function isAnagram(string1, string2) {
    //check if both have same length
    if (string1.length !== string2.length) {
        return "NO"
    }

    //traverse string1 and check if each element is in string2
    for (let i = 0; i < string1.length; i++) {

        if(!string2.includes(string1[i])) {
            
            return "NO"
        }
    }
    
    return "YES"
}

console.log(isAnagram("geeksforgeeks", "forgeeksgeeks")) // YES
console.log(isAnagram("act", "tac")) // YES
console.log(isAnagram("allergy", "allergic")) // NO


console.log("=========================")
console.log(isAnagram2("geeksforgeeks", "forgeeksgeeks"))
console.log(isAnagram2("act", "tac"))
console.log(isAnagram2("allergy", "allergic"))