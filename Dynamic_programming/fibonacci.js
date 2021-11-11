// memoization 
// js object, keys will be arg to fn, value will be the return value

function fib(n, memo = {}){
    if ( n in memo) {
        return memo[n]
    }
    if (n <= 2) {
        return 1
    }
    memo[n] = fib(n - 1) + fib (n - 2)
    
    return memo[n]
}

// console.log(fib(5))
// console.log(fib(12))
console.log(fib(7))
console.log(fib(50))