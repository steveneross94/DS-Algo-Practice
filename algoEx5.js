// given 2 arrays, create a function that lets a user know (T/F)whether the two arrays contain common items
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true 

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
// false 

// const checkIfCommonItemsInArray = (array1, array2) => {
//     for (let i = 0; i < array1.length; i++){
//         for (j = 0; j < array2.length; j++){
//             if (array1[i] === array2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(checkIfCommonItemsInArray(array1, array2))

// array1 ==> object {
// a: true
// b: true
// c: true
// x: true
// }
// array2 - check each item to the object and see if it exists
// array2[array1[i]] === obj.properties

const containsCommonItem = (arr1,arr2) => { // faster because non-nested loops
    // loop through first array, and create object where properties === items in the array
    // loop through second array and check if item in second array exists on created object
    let obj = {}
    for (let i = 0; i < arr1.length; i++){
        if (!obj[i]){
            let item = arr1[i]
            obj[item] = true
        }
    }
    
    for (let j = 0; j < arr2.length; j++){
        if (obj[arr2[j]]){
            return true
        }
    }
    return false
}

console.log(containsCommonItem(array1, array2))
