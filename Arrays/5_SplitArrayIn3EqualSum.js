function split3EqualSum(arr) {

    let index1 = -1
    let index2 = -1
    let preSum = 0
  

    let total_sum = arr.reduce((prev, current) => {
        return prev + current
    }, 0)
    
    if (total_sum % 3 !== 0){
        return false
    }

    let sum1 = total_sum / 3
    let sum2 = 2 * total_sum / 3

    for (let i = 0; i < arr.length; i++){

        preSum = preSum + arr[i]

        if (preSum === sum1 && index1 == -1) {
            index1 = i
        }

        else if (preSum === sum2 && index1 !== -1){
            index2 = i;

            break
        }
    }

    if(index1 !== -1 && index2 !== -1){
        return true
    }

    return false
}

console.log(split3EqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))
console.log(split3EqualSum([0,2,1,-6,6,7,9,-1,2,0,1]))
console.log