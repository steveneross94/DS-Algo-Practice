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
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(12)
myLinkedList.append(15)
myLinkedList.prepend(20)
myLinkedList.prepend(25)
myLinkedList.append(20)
console.log(myLinkedList);