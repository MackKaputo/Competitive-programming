function lonelyinteger(a) {
    // Write your code here
    let hash = new Map()

    for (let i = 0; i < a.length; i++){
        if(hash.has(a[i])){
            hash.set(a[i], hash.get(a[i]) + 1)
        } else {
            hash.set(a[i], 1 )
        }
    }

    for (const [key, value] of hash) {
        if(value === 1) {
            return key
        }
    }

}

console.log(lonelyinteger([1,2,3,4,3,2,1]))