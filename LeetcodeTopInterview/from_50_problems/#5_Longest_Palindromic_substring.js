// Given a string s, return the longest palindromic substring in s.


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(string) {
    let longestPal = '';

    var getLongestPalindrome = function (leftPosition, rightPosition) {
        // While there is space to expand, and the expanded strings match
        while (
            leftPosition >= 0 &&
            rightPosition < string.length &&
            string[leftPosition] === string[rightPosition]
        ) {
            // Expand in each direction.
            leftPosition--;
            rightPosition++;
        }

        // Store the longest palindrom (if it's the longest one found so far)
        if (rightPosition - leftPosition > longestPal.length) {
            longestPal = string.slice(leftPosition + 1, rightPosition);
        }
    };

    // Loop through the letters
    for (let i = 0; i < string.length; i++) {
        // Find the longest odd palendrome
        getLongestPalindrome(i, i + 1);

        // Find the longest even palendrome
        getLongestPalindrome(i, i);

        // Check if a longer palindrome cannot be found
        if ((string.length - i) * 2 < longestPal.length) {
            // Break out to avoid unnecessary computation
            break;
        }
    }

    return longestPal;
};

/*
 /**
 * @param {string} s
 * @return {string}
 *! SLOW SOLUTION !!!
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s
    }

    let tempString = ""
    let tempStringReversed = ""
    let foundPalindromes = []

    for (let i = 0; i < s.length; i++) {
        for(let j = 1; j <= s.length; j++) {
            //Get slice until here
            tempString = s.slice(i,j)
            //Get reversed version
            tempStringReversed = tempString.split("").reverse().join("")
            // Check if they are equal
            if (tempString === tempStringReversed) {
                foundPalindromes.push(tempString)
            }
        }
    }

    //Get the longest one
    let longest = ""

    for (let palindrome of foundPalindromes) {
        if(palindrome.length > longest.length) {
            longest = palindrome
        }
    }
    

    return longest
};

*/

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("ac"))
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.