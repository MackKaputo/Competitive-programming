//! A duplicate will be duplicated in the final soltuion
//! With the two following methods

//* Using one hash maps
function intersect(arr1, arr2) {
    let hash1 = new Map()
    let intersection  = []

    for (let number of arr1) {
        hash1.set(number, number)
    }

    for (let number of arr2) {
        if (hash1.has(number)) {
            intersection.push(number)
        }
    }

    return intersection


}

console.log(intersect([23,4,5, 12], [12, 23, 89,12, 4])) // [12, 23, 4]

//* Using pointers
function intersect2(arr1, arr2) {

    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)

    let pointer1 = 0
    let pointer2 = 0

    let intersection = []

    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] = arr2[pointer2]) {
            intersection.push(arr1[pointer1])
            pointer1++
            pointer2++
        }
        else if (arr1[pointer1] < arr2[pointer2]){
            pointer1++
        } else {
            pointer2++
        }
    }

    return intersection
}

