// You are given a string s and an array of strings words of the same length.
//  Return all starting indices of substring(s) in s that is a concatenation 
//  of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

 
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    // Initialise an array to store our answers in
    let answers = [];

    // Calculate the total length of the words
    const totalLengthOfWords = words.reduce(
        (total, word) => (total += word.length),
        0
    );

    // Loop through the string, until there is insufficient space left to find all words
    for (let i = 0; i <= s.length - totalLengthOfWords; i++) {
        // If the string from this point contains all target words, store the starting position
        if (doesStringContainAllWords(s.substring(i), words.slice())) {
            answers.push(i);
        }
    }

    return answers;
};


function doesStringContainAllWords(string, words) {
    // If all words have been found
    if (!words.length) return true;

    // Loop through all words
    for (let i = 0; i < words.length; i++) {
        // Store the length of the target word (as it may be spliced)
        const targetWordLength = words[i].length;

        // Check if the word in question matches is found at the start of the string
        if (string.substring(0, targetWordLength) === words[i]) {
            // Remove the found word from the words array
            words.splice(i, 1);

            // Look for the remaining words in the rest of the string
            return doesStringContainAllWords(
                string.substring(targetWordLength),
                words
            );
        }
    }

    // If no words were found in the current string
    return false;
}

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" 
// respectively.
// The output order does not matter, returning [9,0] is fine too.


// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lower-case English letters.
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// words[i] consists of lower-case English letters.
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]))
console.log(findSubstring("barfoofoobarthefoobarman",["bar","foo","the"]))