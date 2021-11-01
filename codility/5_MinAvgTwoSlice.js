// Naive solution (100% correctness, 20% performance)
function solution(A) {
    let arrayLength = A.length
    
    let minimum = Infinity
    let index

    for (let i = 0; i < arrayLength - 1; i++) {
        current_presumSlice = A[i]
        for (let j = i + 1; j < arrayLength;j++) {
            current_presumSlice = current_presumSlice + A[j]
            let current_average = current_presumSlice /(j-i+1)
    
            if(current_average < minimum){
                minimum = current_average
                index = i
                //console.log("current index", i)
            }
        }
    }

    return index
}

// 100% correctness 100%performance
function solution2(A) {
    let two = [];
    let three = [];
    let avg = Infinity;
    let index = -1;
    
    for(let i=1; i<A.length; i++) {
        two[i] = (A[i] + A[i-1])/2;
        if(two[i] < avg) {
            avg = two[i];
            index = i-1;
        }
        if(i>1) {
            three[i] = (A[i] + A[i-1] + A[i-2])/3;
            if(three[i] < avg) {
                avg = three[i];
                index = i-2;
            }
        }
    }
    
    return index;
}

console.log(solution([4,2,2,5,1,5,8]))
