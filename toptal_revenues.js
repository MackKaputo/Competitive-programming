
function solution(A) {

    let negatives = []
    let sum = 0
    let counter = 0  // value to be returned
    let pointer = 0 //pointer to be used on the list of negative numbers
    for (let num of A) {
        if (num < 0) { negatives.push(num)}
    
        sum = sum + num

        while (sum < 0) {
            //update sum by removing the negative number (rescheduled)
            sum = sum - negatives[pointer++]  
            counter++
        }
    }

    return counter
}

console.log(solution([10, -10, -1, -1, 10]))  //1 
console.log(solution([-1, -1, -1, 1, 1, 1, 1])) //3
console.log(solution([5, -2, -3, 1])) //0
console.log(solution([-1,2]))  //1
console.log(solution([2])) //0
console.log(solution([])) //0
console.log(solution([-5,10,-2,-1,-3,30])) //1
console.log(solution([0, -4, 7, -4, 1, 1, -5])) //1

// A company has a list expected revenues and payments for the upcoming year in chronological order 
// The problem is that at some moment in time the sum of previous payments can be larger than the total 
// previous revenue, which would put the company in debt. To avoid this problem the company takes a very
// simple approach: it reschedules some expenses to the ned of the year

// You are given an array of integers, where positive numbers represent revenues and negative numbers
// represent expenses, all in chronological order. I one move you relocate any expense (negative number)
// to the end of the array. what is the minimum number of such relocations to make sure that the company
// never falls into debt (in other words: you need to ensure that there is no consecutive sequence of elements
// starting from the beginning of the array, that sums up to a negative number) ?

// You can assume that the sum of all elements in A is nonnegative

// write a function that given an array A of n integers, returns the minimum number of relocations, so that
// company never falls into debt.