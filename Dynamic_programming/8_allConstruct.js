
const allConstruct = (target, wordBank) => {
    if (target === "") {
        return [[]]
    }

    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetWays = suffixWays.map( way => [word, ...way])
            result.push(...targetWays)
        }
    }

    return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))

// [
//     ["purp", "le"],
//     ["p", "ur", "p", "le"]
// ]

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))

// [
//     ["ab", "cd", "ef"],
//     ["abc", "def"],
//     ["abcd", "ef"],
//     ["abcd", "ef"]
// ]

console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // []

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])) // []
