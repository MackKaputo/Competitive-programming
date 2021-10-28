function solution(A, K) {
    let arrayLength = A.length
    let newArray = [];

    if(A.length === 1 || K === 0) {
        return A;
    }
    
    for(let i = 0; i < arrayLength; i++) {
        let newPosition = (i+K) % arrayLength //catch index beyond array length
        
        newArray[newPosition] = A[i];
    }
    
    return newArray;

}

console.log(solution([3, 8, 9, 7, 6], 3))