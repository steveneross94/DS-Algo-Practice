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


const strings = ['a', 'b', 'c', 'd']
                //0    1    2    3 
//push 
strings.push('e') //0(1)

//pop
strings.pop(); //0(1)

//unshift
strings.unshift('x') //O(n)

//splice
strings.splice(2, 0, 'alien') //O(n/2) = adjusts to => O(n)

console.log(strings)