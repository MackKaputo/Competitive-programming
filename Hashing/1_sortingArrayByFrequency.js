// Given an array A[] of integers, sort the array according to frequency of elements.
//  That is elements that have higher frequency come first. 
//  If frequencies of two elements are same, then smaller number comes first.


function sortFrequency(arr) {
    //Initialize counter hash
    //! Object is used here BUT Map can be used here!! new Map() instead of {}
    let elementCounter = {}

    for ( value of arr) {
        // Check if we looped element before to increment counter
        if (elementCounter[value] !== undefined) {
            elementCounter[value] += 1
            continue
        }

        elementCounter[value] = 1
    }
    // sort array by frequency (descending)
    arr.sort((a, b) => {
        
        let freq1 = elementCounter[a]
        let freq2 = elementCounter[b]

        if ( freq1 !== freq2) {
            return freq2 - freq1
        } else {
            return a - b  //smaller number takes priority here
            //* Some cases requires that the one with lower index takes priority
            // return arr.indexOf(a) - arr.indexOf(b)
        }
    })
    

    return arr
}

console.log(sortFrequency([2,4,5,2,3,2,5,5,5,1,1,1,1]))