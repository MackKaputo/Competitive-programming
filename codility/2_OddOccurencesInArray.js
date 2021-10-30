function solution(A) {

    let hash = new Map()
    let arrayLength = A.length

    for (let i = 0; i < arrayLength; i++) {

        if (hash.has(A[i])) {
            // Increase counter of key by 1
            hash.set(A[i], hash.get(A[i]) + 1)
        } else {
            //initialize counter of element
            hash.set(A[i], 1)
        }
    }
    // If counter of an element is odd, return the element (key)
    for (const [key, value] of hash) {
        if (value % 2 === 1) {
            return key
        }
    }

}

console.log(solution([2,4,5,4,6,5,2]))

//ANother solution using bitwise operator
function solution2(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg ^= A[i];
    }
    
    return agg;
}
console.log(solution2([2,4,5,4,6,5,2]))

// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a function:

// def solution(A)

// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7, as explained in the example above.

// Write an efficient algorithm for the following assumptions:

// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.