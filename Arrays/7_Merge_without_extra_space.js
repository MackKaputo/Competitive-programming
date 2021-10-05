// Given two sorted arrays arr1[] and arr2[] of sizes n and m 
// in non-decreasing order. Merge them in sorted order without 
// using any extra space. Modify arr1 so that it contains the first 
// N elements and modify arr2 so that it contains the last M elements.
 

// Example 1:

// Input: 
// n = 4, arr1[] = [1 3 5 7] 
// m = 5, arr2[] = [0 2 6 8 9]
// Output: 
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]
// Explanation:
// After merging the two 
// non-decreasing arrays, we get, 
// 0 1 2 3 5 6 7 8 9.

function Merge(arr1, arr2) {
    let arr1Size = arr1.length
    let arr2Size = arr2.length

    //create merged array
    let merged = arr1.concat(arr2)

    //sort the merged array
    let sortedMerged = merged.sort((prev, current) => {
        return prev - current
    })

    arr1 = sortedMerged.slice(0, arr1Size)
    arr2 = sortedMerged.slice(-arr2Size)
    
    return [arr1, arr2]
}

console.log(Merge([1,3,5], [2,4,7,8]))