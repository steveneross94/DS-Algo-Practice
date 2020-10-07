// reverse a string 


// my solution
const str = "Hi my name is Steven"

// const reverseStr = str => {
//     // check input 
//     if (!str || str.length < 2 || typeof str !== 'string'){
//         return 'hmm no bueno cowpoke'
//     }
//     let strArray = str.split("")
//     let result = []
//     console.log(strArray);
//     for (let i = 0; i < strArray.length; i++){
//         result[i] = strArray[strArray.length - (1 + i)]
//     }
//     return result.join("")
// }

//andrei's solution 
// no built ins
/* function reverse(str){
    // check input 
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'no bueno homie'
    }

    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    return backwards.join('')
} */

/* function reverse2(str){
    return str.split('').reverse().join('')
} */

const reverse3 = str => str.split('').reverse().join('')

// console.log(reverseStr(str))
console.log(reverse3(str));