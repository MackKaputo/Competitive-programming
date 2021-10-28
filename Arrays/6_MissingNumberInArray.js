// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//  2 is the missing number in the range since it does not appear in nums.
// Example 2:

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // Compute the nsum assuming no missing element in array
    // from 1 to maxnumber using n (n + 1) / 2
    
    let maxNumber = nums.length
    let total_sum_assumed = maxNumber * (maxNumber + 1) / 2
   
    for (let number of nums){
        total_sum_assumed = total_sum_assumed - number
    }

    // return left value after updating total_sum_assumed
    return total_sum_assumed 
};

console.log(missingNumber([1,2,3,5], 5))

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
//  2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
//  8 is the missing number in the range since it does not appear in nums.
// Example 4:

// Input: nums = [0]
// Output: 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 
// 1 is the missing number in the range since it does not appear in nums.
