class Node {
    constructor(value){
        this.value = value,
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            prev: null,
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
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode
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
        const follower = leader.next
        leader.next = newNode
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
        this.length++
        return this.printList()
        
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1) //node before nodeToRemove
        const unwantedNode = leader.next
        const follower = unwantedNode.next //node after nodeToRemove
        leader.next = follower
        follower.prev = leader
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
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(12)
myLinkedList.prepend(20)
// myLinkedList.prepend(22)
// myLinkedList.append(20)
// myLinkedList.append(25)
myLinkedList.insert(1, 99)
myLinkedList.remove(1)
console.log(myLinkedList, myLinkedList.printList());