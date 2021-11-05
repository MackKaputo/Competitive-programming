//! Conccept : Keeping track of Sum of current subarray

function birthday(s, d, m) {
    // Write your code here
    let initial_slice = s.slice(0, m) //first m elements
    // Initialize sum 
    let Sum = initial_slice.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    let pointer1 = 0
    let pointer2 = m - 1
    let success_count = Sum === d ? 1 : 0 

    while(pointer2 < s.length ) {

        pointer1 += 1
        pointer2 += 1

        //remove previous pointer1 value, add current pointer2 value
        Sum = Sum - s[pointer1 - 1]
        Sum = Sum + s[pointer2]
        
        if(Sum === d){
            success_count += 1
        }
    }

    return success_count

}

console.log(birthday([2,2,1,3,2], 4, 2))