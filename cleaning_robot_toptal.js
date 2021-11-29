
function moveStraightRight(x,y) {
    return {x: x, y: y + 1}
}

function moveStraightLeft(x,y) {
    return {x: x, y: y - 1}
}

function moveStraightDown(x, y) {
    return {x: x + 1, y: y}
}

function moveStraightUp(x, y) {
    return {x: x - 1, y: y}
}


function move(direction, current_position) {
    if (direction === "right") {
        return moveStraightRight(current_position.x, current_position.y)
    }
    else if (direction === "left") {
        return moveStraightLeft(current_position.x, current_position.y)
    }
    else if (direction === "down") {
        return moveStraightDown(current_position.x, current_position.y)
    }
    else if (direction === "up") {
        return moveStraightUp(current_position.x, current_position.y)
    } else {
        return null
    }
}

function rotate90(current_direction, x, y) {
    if (current_direction === "right") {
        return {x: x + 1, y: y}
    }
    else if(current_direction === "left") {
        return {x: x - 1, y: y}
    }
    else if (current_direction === "up") {
        return {x: x, y: y + 1}
    }
    else if (current_direction === "down") {
        return {x: x, y: y - 1}
    }
}

function cleanRoom(matrix) {


    let directions = ["right", "down",  "left", "up", ]
    let cleaned_positions = new Map()
    // assuming first position always available
    cleaned_positions.set('(0,0)', '(0,0)')

    let direction_pointer_count = 0
    let count = 0
    let counter = matrix[0][0] ? 1 : 0 // if first square is available or not

    let initial_position = {x: 0, y:0}
    let current_direction = directions[direction_pointer_count % (directions.length)]
    console.log("CURRENT DIRECTION ", current_direction)
    console.log("Intial Position ", initial_position)

    let next 

    while (count < 30) { //! Figure out how long this should run! => Decide point to end loop

        console.log("CURRENT DIRECTION ", current_direction)
        if (current_direction === "right") {
            next = moveStraightRight(initial_position.x, initial_position.y)
        }
        else if (current_direction === "down") {
            next = moveStraightDown(initial_position.x, initial_position.y)
        }
        else if (current_direction === "left") {
            next = moveStraightLeft(initial_position.x, initial_position.y)
        }
        else if (current_direction === "up") {
            next = moveStraightUp(initial_position.x, initial_position.y)
        }

        console.log("NExt is ", next )
        // console.log("Next at matrix ", !matrix[next.x][next.y] === true )
        if (matrix[next.x]) {  //! The row exists
            if (!matrix[next.x][next.y]) {
                console.log(next, " not opened")
                let next_trial = rotate90(current_direction, initial_position.x, initial_position.y)
                direction_pointer_count++
                current_direction = directions[direction_pointer_count % (directions.length)]
                console.log("Rotated, next trial is", next_trial)
                console.log("Current direction: ", current_direction)
                console.log("Current position ", initial_position)
    
            } else {            
                console.log(`${JSON.stringify(next)} exists...`)
                cleaned_positions.set(`(${next.x},${next.y})`, `(${next.x},${next.y})`)
                console.log("stepped in it... ")
                initial_position.x = next.x
                initial_position.y = next.y
                console.log(`current position: ${JSON.stringify(next)}`)
                counter++
                
            }
        } else {
            direction_pointer_count++
            current_direction = directions[direction_pointer_count % (directions.length)]
            console.log("NEXT ROW NON_EXISTENT, current direction: ", current_direction)
        }
        count++
    }

    console.log("===== FINAL COUNT : ", counter)
    console.log(cleaned_positions)
    console.log("FINAL CLEANED AREAS: ", cleaned_positions.size)
    
}

let my_matrix1 = [
    [1,1,1,0],
    [0,1,1,0],
    
]


let my_matrix = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,0,1]
    
]

// console.log(rotate90("down", 2, 3))
cleanRoom(my_matrix)
console.log(move("right", {x: 2, y: 3}))
// console.log(my_matrix[2])

