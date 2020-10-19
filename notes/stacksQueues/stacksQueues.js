// stacks - LIFO

/* 
ex) Browser History - Hitting back button to access history

google 
udemy
youtube

Stacks have a top and bottom, and we can build them with arrays or linked lists
What are the trade offs for using array vs LL, and vice-versa? 
- Both work quite well
- One major thing, arrays have cache locality (accessing items because they are right next to each other)
- LL has pointers and dynamic memory so we can keep adding to them

// Queues - FIFO

ex) Line
Matt -- Joy -- Samir -- Pavel

We can use arrays or linked lists - Which is better to use?
- Straight up, don't use an array, use LL
    - Why? Arrays have indexes associated with them
        - rather than shifting indexes, we change the pointers

*/

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value)
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
    
    pop(){
        // find node
        const nodeToRemove = this.top
        // set top to node AFTER the node to remove 
        this.top = nodeToRemove.next
        this.length--
    }

    isEmpty(){
        if (this.length === 0){
            return true
        }
    }

}

const myStack = new Stack()
myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')
// myStack.pop()
console.log(myStack);