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

console.log(maxSubArraySum([9,-2,3,-19,4,11]))

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