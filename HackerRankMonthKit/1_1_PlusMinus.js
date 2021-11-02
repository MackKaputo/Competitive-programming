function plusMinus(arr) {
    // Write your code here
    let arrayLength = arr.length 
    let hash = new Map()
    hash.set('pos',0)
    hash.set('neg',0)
    hash.set('zero',0)

    for (let number of arr) {
        if(number > 0){
            hash.set('pos', hash.get('pos') + 1)
        } else if (number < 0) {
            hash.set('neg', hash.get('neg') + 1)
        } else {
            hash.set('zero', hash.get('zero') + 1)
        }
    }

    let positiveRatio = ((hash.get('pos') / arrayLength).toPrecision(6))
    let negativeRatio = ((hash.get('neg') / arrayLength).toPrecision(6))
    let zeroRatio = ((hash.get('zero') / arrayLength).toPrecision(6))

    console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`)
}

plusMinus([1,1,0,-1,-1])