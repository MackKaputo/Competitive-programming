// 100% correctness, 90% Performance (codility result)
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let positions = []
    //create array of positions starting from 1 since frog is already at position 0
    for (let i = 1; i <= X; i++){
        positions.push(i)
    }

    for (let i = 0; i < A.length; i++) {
    
        if(positions.includes(A[i])){
            //mark position filled with leave, remove it from positions
            positions.splice(positions.indexOf(A[i]), 1)

            if(positions.length === 0){
                return i
            }
        }
    }

    return -1

}


// 100% correctness, 100% Performance (codility result)[outsourced solution]
function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var leaves = [];
    var i = 0;
    var result = -1;
    
    for(i=0; i<A.length; i++) {
        if(typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }
    
    if(leaves.length < X) {
        return -1;
    }
    
    for(i=1; i<=X; i++) {
        if(typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }
    
    return result;
}