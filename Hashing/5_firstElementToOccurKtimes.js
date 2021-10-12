
function firstElementKTime(arr, k) {
    //Initialize hash map to store values and occurence count
    let hashMap = new Map()

    if (k === 1) {
        return arr[0]
    }

    //loop through elements and check which occurs k times first from the hash
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i])) {
            hashMap.set(arr[i], hashMap.get(arr[i]) + 1 )

            // check if occurence has reached k or not
            if (hashMap.get(arr[i]) === k ) {
                return arr[i]
            }

            continue
        }

        hashMap.set(arr[i], 1)
    }

    return -1
}

console.log(firstElementKTime([1,7,4,3,4,8,7], 2))



// Given an array of N integers. Find the first element that occurs K number of times. 
 

// Example 1:

// Input :
// N = 7, K = 2
// A[] = {1, 7, 4, 3, 4, 8, 7}
// Output :
// 4
// Explanation:
// Both 7 and 4 occur 2 times. 
// But 4 is first that occurs 2 times.

// returns the required answer. If answer is not present in the array, return -1.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 <= N, K <= 105
// 1<= A <= 106

 