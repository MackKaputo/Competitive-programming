
//* Time out @HackerRank
function superDigit(n, k) {
    let numStr = n.repeat(k)

    if(numStr.length === 1 && k === 1) { return Number(numStr)}

    let numbers  = []

    for (let str of numStr) {
        numbers.push(Number(str))
    }

    let sum = numbers.reduce((total, current) => {
        return total + current
    }, 0)

    return superDigit(sum.toString(), 1)

}

console.log(superDigit('9875', 4)); // 8

//* Python solution
// def superDigit(n, k):
//     # Write your code here
   
//     if len(n) == 1:
//         result = k * int(n)
//         return sum([int(c) for c in str(result)])
//     digit_sum = sum([int(c) for c in n])
//     return superDigit(str(digit_sum), k)
