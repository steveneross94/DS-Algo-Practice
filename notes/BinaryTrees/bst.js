class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true){
                if (value < currentNode.value){
                    // go left
                    if (!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    } 
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if (!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        } 
    }

    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root
        while (currentNode){
            if (value < currentNode.value){
                // go left
                currentNode = currentNode.left
            } else if (value > currentNode.value){
                // go right
                currentNode = currentNode.right
            } else if (currentNode.value === value ){
                return currentNode
            }
        }
        return false
    }
}

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)

console.log(tree.lookup(10));