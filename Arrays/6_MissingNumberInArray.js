// Given an array of size N-1 such that it only contains distinct 
// integers in the range of 1 to N. Find the missing element.
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

function MissingNumber(array, maxNumber) {
    // Compute the nsum assuming no missing element in array
    // from 1 to maxnumber using n (n + 1) / 2
    let total_sum_assumed = maxNumber * (maxNumber + 1) / 2
   
    for (let number of array){
        total_sum_assumed = total_sum_assumed - number
    }

    // return left value after updating total_sum_assumed
    return total_sum_assumed 
}

console.log(MissingNumber([1,2,3,5], 5))