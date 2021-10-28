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