
// basic recursive fibonacci 

function fib(n){

    if (n <= 2) {
        return 1
    }

    return fib(n - 1) + fib (n - 2)
}

console.log(fib(5)) //5
console.log(fib(12)) // 144
console.log(fib(7)) //13
console.log(fib(50))  //12586269025