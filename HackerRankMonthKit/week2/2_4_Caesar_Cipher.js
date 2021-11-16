
/*
 * The function is expected to return a STRING.
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let allAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let allAlphabetsLength = allAlphabets.length
    // Initialize final string
    let Output = ''

    for (let i = 0; i < s.length; i++) {
        
        let current = s[i]
      
        if(allAlphabets.includes(current.toLowerCase())){
            
            let alphabetIndex = allAlphabets.indexOf(current.toLowerCase())
            let transformedAlphabetIndex = ( alphabetIndex + k ) % allAlphabetsLength
            let transformedAlphabet = allAlphabets[transformedAlphabetIndex]
            
            if(current === current.toUpperCase()) {
                Output += transformedAlphabet.toUpperCase()
            } else {
                Output += transformedAlphabet

            }
        }

        else {
            Output += s[i]
        }
        
    }

    return Output

}

console.log(caesarCipher("Abc-abc", 3))
console.log(caesarCipher("There's-a-starman-waiting-in-the-sky"))