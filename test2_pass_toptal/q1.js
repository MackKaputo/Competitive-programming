
function solution(T, R) {
    // write your code in JavaScript (Node.js 8.9.4)
  
    let counter = 0
    let hash = new Map()
    let groupNumber = 0
    for (let i = 0; i < T.length; i++) {
        let str = T[i]
        let string = str[str.length -1]
        let conv = Number(string)
        
        // console.log(conv)
        if(conv) {
            groupNumber++
            if (string && R[i] === "OK") {
                counter++
                
            }
    
        }
        
        else {
            if(hash.has(str[str.length - 2]) && hash.get(str[str.length - 2])!== "OK"){
                hash.set(str[str.length - 2], "NO")
                
            } else {
                hash.set(str[str.length - 2], R[i])
                groupNumber++
            }
            
        }
    }
    
    for (const [key, value] of hash) {
        if(value === "OK") {
            counter++
            groupNumber++
        }
    }

    
    
    let score = Math.floor(counter * 100 / groupNumber)
    

    return score

}
let T = []
let R = []


T[0] = "codility1"   ;R[0] = "Wrong answer"
T[1] = "codility3"   ;R[1] = "OK"
T[2] = "codility2"   ;R[2] = "OK"
T[3] = "codility4b"  ;R[3] = "Runtime error"
T[4] = "codility4a"  ;R[4] = "OK"

console.log(solution(T, R))