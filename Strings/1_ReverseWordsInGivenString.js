// Given a String S, reverse the string without reversing its individual words
// Example: Let the input string be “i like this program very much”. 
// The function should change the string to “much very program this like i”

function reverseWords(word) {
    //create array of words contained in string
    let separatedWords = word.split(" ")
    //reverse returned array
    separatedWords.reverse()
    // Join them with a space in between
    let finalReversed = separatedWords.join(" ")

    return finalReversed
    
}

let testString = "i like this program very much"

console.log(reverseWords(testString))