/* Hash Tables
An object in JavaScript

Why do we even care about these? Obvious answer, interviews, but it's also incredibly common in databases

The immediate benefit to using this over an array is the key/value pair

The key points to an index and that is done via the hash function

Hash Function - a function that generates a value of fixed length for each input that it gets

The fact that we can create a hash, but we cant recreate the word back from the hash, is called idempotent. This is also what allows us to find our keys very quickly

Usually the answer to improve time complexity but will cost us space complexity
*/

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhhh')
    }
}

console.log(user.age, user.spell = 'abra kadabra', user)
console.log(user.scream())

/* 
Hash Collision - with enough data and limited memory, 
we're always going to have collisions

Two common ways to deal with collisions
1) Linked Lists (separate chaining)
2) 

*/

const a = new Map() // maintains insertion order
// can also use arrays or functions as keys

const b = new Set() // only stores the keys. no values
console.log(a, b)