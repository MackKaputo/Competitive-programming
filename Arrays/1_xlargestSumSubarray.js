// Given an array Arr[] of N integers. Find the contiguous 
// sub-array(containing at least one number) which has the maximum sum 
// and return its sum.

function maxSubArraySum(nums) {
    let max_so_far = -Infinity
    let max_ending_here = 0
    
    for( let i = 0; i < nums.length; i++){
        max_ending_here = max_ending_here + nums[i]

        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here
        }

        if(max_ending_here < 0){
            max_ending_here = 0
        }
    }

    return max_so_far
}

//* Same solution written differently using Math.max instead

function golden_max_slice(nums) {

    let max_ending = 0
    let max_slice = 0
    // If we assume that the maximum sum of a slice ending in position i equals
    // max_ending, then the maximum slice ending in position i+1 
    // equals max(0, max_ending+ a [i+1] ).
    for ( value of nums) {
        max_ending = Math.max(0, max_ending + value)
        max_slice = Math.max(max_slice, max_ending)
    }

    return max_slice
}


//* IF INDICES OF THE FOUND LONGEST SUBARRAY ARE NEEDED (VARIANT)
function maxSliceSumWithIndices(nums) {
    let best_sum = 0
    let best_start = 0 //starting index
    let best_end = 0  //ending index
    let current_sum = 0

    for (let i = 0; i < nums.length; i++) {
        if (current_sum <= 0) {
            // start a new sequence at the current element
            current_start = i
            current_sum = nums[i]
        } else {
            // extend the existing sequence with the current element
            current_sum += nums[i]
        }

        if (current_sum > best_sum) {
            best_sum = current_sum
            best_start = current_start
            best_end = i 
        }
    }

    return [ best_sum, [best_start, best_end]] 
}

console.log(maxSliceSumWithIndices([9,-2,3,-19,4,11]))
console.log(maxSubArraySum([9,-2,3,-19,4,11]))
console.log(golden_max_slice([9,-2,3,-19,4,11]))

//* ALGORITHM USED
//* Kadane’s Algorithm:

// Initialize:
//     max_so_far = INT_MIN
//     max_ending_here = 0

// Loop for each element of the array
//   (a) max_ending_here = max_ending_here + a[i]
//   (b) if(max_so_far < max_ending_here)
//             max_so_far = max_ending_here
//   (c) if(max_ending_here < 0)
//             max_ending_here = 0
// return max_so_far