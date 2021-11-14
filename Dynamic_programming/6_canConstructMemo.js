
const canConstruct = (target, wordBank, memo = {}) => {

    if (target in memo ) {
        return memo[target]
    }

    if (target === "") {
        return true
    }

    for (let word of wordBank) {
        // check if word is a prefix of target
        if (target.indexOf(word) === 0) {
            // get the remaining part of the string after removing prefix
            const suffix = target.slice(word.length)

            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true  //memoize this word
                return  memo[target]
            }
        }
    }

    memo[target] = false
    return memo[target]  // or return false
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]))       // false