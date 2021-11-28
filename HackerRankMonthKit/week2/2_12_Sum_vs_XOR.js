
//! Timeout but correct
function sumXor(n) {
    let counter = 0
    for (let i = 0; i <= n; i++) {
        if ((n + i) === (n ^ i)){
            counter += 1
        }
    }

    return counter
}

console.log(sumXor(4)) //4
console.log(sumXor(5))  //2

//! Python solution
// def sumXor(n):
//     #Write your code here
//     return 1 if n == 0 else 2**(bin(n)[2:].count('0'))