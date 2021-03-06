// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
//* ACCEPTED WITH HIGH PERFORMANCE
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {  
    //merge and sort the two arrays
    let merged = nums1.concat(nums2).sort((a,b) => a - b)
    let median
    let mergedLength = merged.length
    
    if ( merged.length % 2 === 0) {
        //the median is the average of the the two numbers positioned
        // in the middle of the array (the array can equally be split into two in this case)
        median = (merged[mergedLength / 2] + merged[(mergedLength / 2) - 1 ]) / 2

        return median
    }

    let medianPosition = ( mergedLength - 1 ) / 2

    return merged[medianPosition]
};

console.log(findMedianSortedArrays([1,3], [2] ))
console.log(findMedianSortedArrays([1,2], [3,4] ))
console.log(findMedianSortedArrays([1,3], [2] ))
console.log(findMedianSortedArrays([], [1] ))




// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000
// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000