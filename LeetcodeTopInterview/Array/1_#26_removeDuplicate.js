// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages,
//  you must instead have the result be placed in the first part of the array nums.
//   More formally, if there are k elements after removing the duplicates, 
//   then the first k elements of nums should hold the final result. 
//   It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying 
// the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    // Return, if array is empty
    // or contains a single element
    let n = nums.length;
    
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
 
    // Start traversing elements
    var j = 0;
    for (var i=0; i<n-1; i++)
 
        // If current element is not equal
        // to next element then store that
        // current element
        if (nums[i] != nums[i+1])
            temp[j++] = nums[i];
 
    // Store the last element as whether
    // it is unique or repeated, it hasn't
    // stored previously
    temp[j++] = nums[n-1];
 
    // Modify original array
    for (var i=0; i<j; i++)
        nums[i] = temp[i];
 
    return j;
    
    
};