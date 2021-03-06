const obj1 = { a: true }
const obj2 = obj1 // this is a pointer to obj1

// cool, let's make one
// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    printList(){
        const array = []
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        if (index >= this.length){
            return this.append(value)
        }

        const newNode = new Node(value)

        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
        
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
    }

    traverseToIndex(index){
        let counter = 0
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    reverse(){
        if (!this.head.next){
            return this
        }

        let first = this.head; // just to keep track of it
        console.log(first)
        this.tail = this.head
        let second = first.next 
        console.log(second)
        while (second){ // as long as the second variable is not null
            const temp = second.next; //create a temp variable to hold the next variable
            second.next = first; //now the 
            first = second;
            second = temp
        }
        this.head.next = null;
        this.head = first
        return this.printList()
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(12)
myLinkedList.prepend(20)
myLinkedList.prepend(22)
myLinkedList.append(20)
myLinkedList.append(25)
myLinkedList.insert(1, 99)
myLinkedList.remove(2)
myLinkedList.reverse()
console.log(myLinkedList, myLinkedList.printList(), myLinkedList.reverse());