// memoization 
// js object, keys will be arg to fn, value will be the return value

function fib(n, memo = {}){
    if ( n in memo) {
        return memo[n]
    }
    if (n <= 2) {
        return 1
    }
    memo[n] = fib(n - 1, memo) + fib (n - 2, memo)

    return memo[n]
}

console.log(fib(5)) //5
console.log(fib(12)) // 144
console.log(fib(7)) //13
console.log(fib(50))  //12586269025