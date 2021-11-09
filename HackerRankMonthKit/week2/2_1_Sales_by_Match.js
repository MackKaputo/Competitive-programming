/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here

    //initialize hash for counting
    let hash = new Map()
    //initialize pair counter
    let pair_count = 0

    for (let number of ar){
        
        if(hash.has(number)){
            hash.set(number, hash.get(number) + 1 )
        } else {
            hash.set(number, 1)
        }
    }
    
    for (const [key, value] of hash) {
        if(value > 1) {
            let current_pairs = Math.floor(value / 2)
            pair_count = pair_count + current_pairs
        }
    }

    return pair_count

}

//* Another solution
function sockMerchant2(n, ar) {
    let count = 0;
    let unpaired = new Set();
    ar.forEach(item => {
            if (unpaired.has(item)) {
                count++;
                unpaired.delete(item);
            } else {
                unpaired.add(item);
            }
        }
    );
    return count;
}

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// n = 7
ar = [1,2,1,2,1,3,2]

console.log(sockMerchant(7, ar))

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs