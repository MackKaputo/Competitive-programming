var removeDuplicates = function(nums) {
    
    let hash = {}
    let pointer = 0
    
    for (let i = 0; i < nums.length; i++) {
        
        if (hash[nums[i]] !== undefined ) {
            continue
        } else {
            hash[nums[i]] = hash[nums[i]]
            nums[pointer++] = nums[i]
        }
        
        
        
    }
    
   return nums
    
    
}

console.log(removeDuplicates([1,1,2,3,3,4,4,4,4]))