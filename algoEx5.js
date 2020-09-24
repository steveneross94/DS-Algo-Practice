// given 2 arrays, create a function that lets a user know (T/F)whether the two arrays contain common items
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true 

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
// false 

const checkIfCommonItemsInArray = (array1, array2) => {
    for (let i = 0; i < array1.length; i++){
        for (j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                return true
            }
        }
    }
    return false
}

console.log(checkIfCommonItemsInArray(array1, array2))
