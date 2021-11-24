
function sherLock(arr) {

    if(arr.length === 1) { return "YES"}

    const sum = (subarray) => {
        return subarray.reduce((total, curr) => {
            return total + curr
        }, 0 )
    }

    for (let i = 0; i < arr.length; i++) {
        if(sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) {
            return "YES"
        }
    }

    return "NO"
}

console.log(sherLock([1,2,3,4])) // NO
console.log(sherLock([5, 6, 8, 11])) // YES
console.log(sherLock([0, 0, 4, -1, -4, 3])) //YES
console.log(sherLock([3,0])) //YES

function sherLock2(arr) {

    if (arr.length === 1) {return "YES"}

    let totalSumRight = arr.reduce((total, current) => {
        return total + current
    }, 0)

    let preSum = 0

    for (let i = 0; i < arr.length; i++) {
        preSum = preSum + arr[i]

        let preSumExceptCurrent = preSum - arr[i]

        totalSumRight = totalSumRight - arr[i]

        if (preSumExceptCurrent === totalSumRight) {
            return "YES"
        }
    }

    return "NO"
}

console.log("----------")
console.log(sherLock2([1,2,3,4])) // NO
console.log(sherLock2([5, 6, 8, 11])) // YES
console.log(sherLock2([0, 0, 4, -1, -4, 3])) //YES
console.log(sherLock2([3,0])) //YES