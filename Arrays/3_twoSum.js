// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up 
// to target.

// You may assume that each input would have exactly one 
// solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Initialize an hash to store value we'll loop through
    let hash = {}
    //Initialize array of pairs to be returned
    let pairs = []

    for (let i = 0; i < nums.length; i++){
        // Compute the difference between between target and current number
        // and look in the hash if that difference exists
        let difference = target - nums[i]

        if(hash[difference] !== undefined ){
            pairs.push(nums.indexOf(difference), i )
        }

        hash[nums[i]] = nums[i]
    }
    //console.log(hash)
    return pairs
}

console.log(twoSum([0,4,3,0], 0))
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))