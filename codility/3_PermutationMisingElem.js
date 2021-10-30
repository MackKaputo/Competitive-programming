function solution(A) {
    // Compute the nsum assuming no missing element in array
    // from 1 to maxnumber(n) using n (n + 1) / 2
    
    let maxNumber = A.length + 1 // Here, n = N + 1
    let total_sum_assumed = maxNumber * (maxNumber + 1) / 2
   
    for (let number of A){
        total_sum_assumed = total_sum_assumed - number
    }

    // return left value after updating total_sum_assumed
    return total_sum_assumed 
}

console.log(solution([2,3,1,5]))

// Find the missing element in a given permutation

// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// def solution(A)

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].