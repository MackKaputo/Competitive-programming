
/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
 function isPalidrome(str) {

    let leftPointer = 0
    let rightPointer = str.length - 1

    while (leftPointer < rightPointer) {

        //return false if values on left and right pointer are different
        if ( str[leftPointer] !== str[rightPointer]) {
            
            return false
        }

        leftPointer++
        rightPointer--
        
    }

    return true
}

console.log(isPalidrome("racecar"))
console.log(isPalidrome("hello"))