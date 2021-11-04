function matchingStrings(strings, queries) {
    // Write your code here
    let hash = new Map()
    for (let i = 0; i < strings.length; i++){
        if(hash.has(strings[i])){
            //increment current element count by 1
            hash.set(strings[i], hash.get(strings[i]) + 1 )
        } else {
            //Initialize counter for current element
            hash.set(strings[i], 1)
        }
    }

    let foundCounter = []

    for(let i = 0; i < queries.length; i++) {
        if(hash.get(queries[i])){
            foundCounter.push(hash.get(queries[i]))
        } else {
            foundCounter.push(0)
        }
    }

    return foundCounter
}

console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc']))
