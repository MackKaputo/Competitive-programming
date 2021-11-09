
function pangrams(s) {
    // Write your code here

    // Split string at space and join it to make one string without space
    let s_joined = s.trim().toLowerCase().split(" ").join('')
    
    // Get unique values
    let hash = new Map()

    for (let i = 0; i < s_joined.length; i++){
        if (hash.has(s_joined[i])){
            continue
        } else {
            hash.set(s_joined[i], s_joined[i])
        }
    }
    // console.log(hash)
    //Check the size of the hash: if 26, Pangram
    if(hash.size === 26){
        return "pangram" 
    } else {
        return "not pangram"
    }

    //* We could further split to get individual characters arrays
    //* And create a set from it, then check if size of Set is 26

}

console.log(pangrams("not really"))
console.log(pangrams("The quick brown fox jumps over the lazy dog"));

