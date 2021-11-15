
function solution(A) {
    let negatives = []
    let newA = []
    let sum = 0

    for (let num of A) {
        if (num < 0) { negatives.push(num)}
        newA.push(num)
        sum = sum + num

    
    }

    console.log(newA)
    console.log(negatives)

    

    return 
}

console.log(solution([10, -10, -1, -1, 10]))  //1
// console.log(solution([-1, -1, -1, 1, 1, 1, 1])) //3
// console.log(solution([5, -2, -3, 1])) //0
// console.log(solution([-1,2]))  //1
// console.log(solution([2])) //0
// console.log(solution([])) //0
// console.log(solution([-5,10,-2,-1,-3,30])) //1