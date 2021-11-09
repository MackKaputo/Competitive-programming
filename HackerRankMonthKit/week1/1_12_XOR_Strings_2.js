//! NO JAVASCRIPT AVAILABLE AT TEH MOMENT:

//! Python solution
// def strings_xor(s, t):
//     res = ""
//     for i in range(len(s)):
//         if s[i] == t[i]:
//             res += '0';
//         else:
//             res += '1';

//     return res

//* Equivalent JS function

function strings_xor(s, t){
    let res = ""
    for (let i = 0; i < s.length; i++){
        if( s[i] === t[i]){
            res += '0'
        } else {
            res += '1'
        }
    }

    return res
}

console.log(strings_xor('10101', '00101'))