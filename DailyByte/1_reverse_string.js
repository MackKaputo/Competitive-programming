// This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

function reverseString(string) {
    
    let string_length = string.length 
    let reversed_string_array = []

    for (let i = string_length - 1; i >= 0; i--) {
        reversed_string_array.push(string[i])
    }

    const final_reversed_string = reversed_string_array.join("")

    console.log(final_reversed_string)
    return final_reversed_string
}

reverseString("Cat")
reverseString("The Daily Byte")
reverseString("civic")