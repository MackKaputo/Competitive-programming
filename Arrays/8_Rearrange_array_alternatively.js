// Given a sorted array of positive integers. Your task is to rearrange
//   the array elements alternatively i.e first element should be max 
//   value, second should be min value, third should be second max, 
//   fourth should be second min and so on.

// Example 1:

// Input:
// N = 6
// arr[] = {1,2,3,4,5,6}
// Output: 6 1 5 2 4 3
// Explanation: Max element = 6, min = 1, 
// second max = 5, second min = 2, and 
// so on... Modified array is : 6 1 5 2 4 3.

function rearrange(arr) {
    let arrSize = arr.length
    //Initialize left side pointer
    let leftPointer = 0
    //Initialize right side pointer
    let rightPointer = arrSize - 1
    // Variable to help alternate between pointers move
    let flag = true
    //Initialize temporary array of same size as given array
    let temporary = new Array(arrSize)
    
    for (let i = 0; i < arrSize; i++){
        if(flag) {
            // start with right pointer to make max as firt value
            temporary[i] = arr[rightPointer--]
        }
        else {
            temporary[i] = arr[leftPointer++]
        }
        //update flag to alternate operation
        flag = !flag
    }

    // Copy temporary array back to given array
    for (let i = 0; i < arrSize; i++){
        arr[i] = temporary[i]
    }

    return arr
}

console.log(rearrange([1,2,3,4,5,6,7,8]))