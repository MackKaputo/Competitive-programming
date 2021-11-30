function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = new Map()
    let unique = []
    for (let num of A) {
        if(hash.has(num)) {
            continue
        } else {
            hash.set(num, num)
            unique.push(num)
        }
    }

    const contains = (check, arr) => {
        for (let num of arr) {
            if (!check.includes(num)){
                return false
            } 
        }
        return true
    }
    
    let all = []
    for (num of A) {
        if(!contains(unique, all)){
            all.push(num)
        }
    }

    for (let num of all) {
        if(all.slice(1, all.length - 1).includes(num) && contains(unique,all.slice(1, all.length - 1))){
            all.slice(all.indexOf(num), 1)
        }
    }

    return all.length
}

solution([2,1,1,3,2,1,1,3])