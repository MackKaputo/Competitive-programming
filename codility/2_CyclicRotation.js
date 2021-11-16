function solution(A, K) {
    let arrayLength = A.length
    let newArray = [];

    if(A.length === 1 || K === 0) {
        return A;
    }
    
    for(let i = 0; i < arrayLength; i++) {
        let newPosition = (i + K) % arrayLength //catch index beyond array length
        
        newArray[newPosition] = A[i];
    }
    
    return newArray; //* return newArray.join('')  FOR STRINGS

}

console.log(solution([3, 8, 9, 7, 6], 3))
console.log(solution('kop', 1).join(''))  //equivalent for string