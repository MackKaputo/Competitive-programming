
function isRotation(arr1, arr2) {

    if(arr1.length !== arr2.length) { return false}

    if(arr1.length === 0  && arr2.length === 0 ) { return true }
    // pick the first element (just to simplify computation)
    // Find the rotation factor
    let rotationFactor = 0
    let ref = arr1[0]

    if(!arr2.includes(ref)) {
        return false
    } else {
        rotationFactor = arr2.indexOf(arr1[0])
    }

    for(let i = 0; i < arr1.length; i++) {
        // position of current element in rotated array
        let newPosition = (i + rotationFactor) % arr2.length

        if(arr1[i] !== arr2[newPosition]) {
            return false
        }
    }

    return true
}

console.log(isRotation([1,2,3,4], [3,4,1,2]))
console.log(isRotation([], []))