function sol(S, C) {
    // split array at each line
    let row = S.split("\n")
    //split first row at ","
    let titles = row[0].split(",")
    //find the index of the title
    let index = titles.indexOf(C)
    // for each values at found index, save it
    let values = []

    for (let i = 1; i < row.length; i++){
        //get values at index
        values.push(row[i].split(",")[index])
    }
    for (let i = 0; i < values.length; i++) {
        values[i] = Number(values[i])
    }

    let max = values.reduce(function(a,b){
        return Math.max(a,b)
    })
    console.log(max)

    return max

    
}

sol('id,name,age,act.,room,dep.\n1,Jack,68,T,13,8,\n17,Betty,28,F,15,7', "age")