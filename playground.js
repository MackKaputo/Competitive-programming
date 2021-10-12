/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    //find degree of array
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    let degree = 0
    for (const [key, value ] of hash) {
        if(value > degree) {
            degree = value
        } 
    }

    //find shortest subarray that satisfies degree found
};