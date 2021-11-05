// You match high values from one array with low values of the
//  other array. The logic seems to be that if you can't match 
//  a low value with the next available high value, you won't 
//  be able to match it with any other value in the array, because
 
//  all the other values available will be lower then the one 
//  you already got.

function twoArrays(k, A, B) {
    // Write your code here
    // sort arrays: one ascending, one descending
    let A_ascending = A.sort((a, b) => a - b)  //ascending
    let B_descending = B.sort((a, b) => b -a)  // descending

    for (let i = 0; i < A.length; i++){
        if (A_ascending[i] + B_descending[i] < k) {
            return "NO"
        }
    }

    return "YES"
}

console.log(twoArrays(10, [2, 1, 3],[7, 8, 9]));
console.log(twoArrays(5, [1, 2, 2, 1],[3, 3, 3, 4]));