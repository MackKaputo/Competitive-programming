function findZigZagSequence(a, n){
    let mid =  Math.floor(n/2)
    a.sort((a,b) => a - b)
    
    let rightSequence = a.slice(mid).reverse()
    let pointer = 0
    for(let i = mid; i < n; i++){
        a[i] = rightSequence[pointer++]
    }
    console.log(a)
}

function findZigZagSequence2(a, n){
    let mid  = Math.floor(n/2)
    a.sort((a,b) => a - b)
    // permute middle element with last
    let temp_mid = a[mid]
    a[mid] = a[n-1]
    a[n-1] = temp_mid
    // reverse elements between mid and last element
    let left = mid +1 
    let right = n - 2

    while(left <= right){
        let temp_left = a[left]
        a[left] = a[right]
        a[right] = temp_left
        
        left++
        right--
    }

    console.log(a)
}

findZigZagSequence([1,2,3,4,5,6,7], 7)
findZigZagSequence2([1,2,3,4,5,6,7], 7)

findZigZagSequence([2,3,5,1,4], 5)
findZigZagSequence2([2,3,5,1,4], 5)

findZigZagSequence([5,1], 2)
findZigZagSequence2([5,1], 2)


// Given an array of k distinct integers, transform the array into
//  a zig zag sequence by permuting the array elements. 
//  A sequence will be called a zig zag sequence if the first k 
//  elements in the sequence are in increasing order and the last k  
//  elements are in decreasing order, where k = (n + 1) / 2 . You need to find the
//   lexicographically smallest zig zag sequence of the given array.