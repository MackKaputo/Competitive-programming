const fib = (n) => {
    const table = Array(n + 1).fill(0)
    table[1] = 1
    let before_last = n - 1
    let last = n
    for (let i = 0; i<=n; i++) {
        if (i === before_last) {
            table[i + 1] += table[i]
        }
        else if (i === last) {
            break

        } else {
            table[i + 1] += table[i]
            table[i + 2] += table[i]
        }

    }
    
    return table[n]
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025

