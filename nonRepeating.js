
function nonRepeating(str) {
    
    let hash = new Map()

    for (let char of str) {
        if(hash.has(char)) {
            hash.set(char, hash.get(char) + 1)
        } else {
            hash.set(char, 1)
        }
    }

    for (const [key, value] of hash) {
        if(value === 1) {
            return key
        }
    }

    return null
}

console.log(nonRepeating("hello world"))
console.log(nonRepeating("is there a size that I want? "))
console.log(nonRepeating("abacddbec"))