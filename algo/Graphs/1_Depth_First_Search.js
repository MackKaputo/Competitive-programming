// DO not edit the class below except for the depthFirstSearch method.
// Feel free to add new properties and methods to the class
class Node {
    constructor(name) {
        this.name = name
        this.children = []
    }

    addChild(name) {
        this.children.push(new Node(name))
        return this
    }

    depthFirstSearch(array) {
        // Write your code here
        array.push(this.name)
        if (this.children.length > 0) {
            this.children.forEach((child) => {
                child.depthFirstSearch(array)
            })
        }

        return array
    }
}

// Do not edit the line below
exports.Node = Node