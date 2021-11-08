function flippingBits(n) {
    // Write your code here
    // convert to binary then fill string with zero max length 32
    let y = n.toString(2).padStart(32, "0"); 
    let result = "";
    for (const char of y) {
        result += char == "0" ? "1" : "0"; // invert bits
    }

    // Convert back to decimal 
    return parseInt(result, 2);

}

console.log(flippingBits(9))