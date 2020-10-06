// const strings = ['a', 'b', 'c', 'd']
//                 //0    1    2    3 
// //push 
// strings.push('e') //0(1)

// //pop
// strings.pop(); //0(1)

// //unshift
// strings.unshift('x') //O(n)

// //splice
// strings.splice(2, 0, 'alien') //O(n/2) = adjusts to => O(n)

// console.log(strings)

/* STATIC vs DYNAMIC Arrays 
#Static - fixed in their size
#Dynamic - size can be varied

*/


// const strings = ['a', 'b', 'c', 'd']
//                 //0    1    2    3 


// console.log(strings)

// Classes in JavaScript 

// reference type

// [] === [] // same thing here, they are different objects
// false
// [1] === [1]
// false

var object1 = { value: 10}
var object2 = object1
var object3 = { value: 10 }

console.log(object1 === object2) //object2 is *referencing* object1
console.log(object1 === object3) //these are different objects
// context 
function a(b){
    let a = 4
}

const object4 = {
    a: function() {
        console.log(this)
    }
}
console.log(object4)
/* 'this' just refers to whatever object it's inside of */

// instantiation

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

const player1 = new Player('Steven', 'friend')
console.log(player1.introduce());

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`Weeeee I'm a(n) ${this.type}`)
    }
}

const wizard1 = new Wizard('Steven', 'Ice Mage')

console.log(wizard1.play())