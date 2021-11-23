
function Occurence(arr) {

    let hash = new Map()
    let maxCounter = 0

    for (let number of arr) {
        if(hash.has(number)){
            hash.set(number, hash.get(number) + 1)
        } else {
            hash.set(number, 1)
        }

        if(hash.get(number) > maxCounter) {
            maxCounter = hash.get(number)
        }
    }
}