let s = [2,4,2,5,6,2]

let sUnique = new Set(s)
console.log("================")
for (let index in s){
    console.log(s[index])
}

console.log(sUnique)
let temp = []
let counter = 0
for (let value of sUnique) {
    console.log(value)
    temp[counter++] = value
}

console.log("temp", temp)

