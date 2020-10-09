let arr1 = [0,3,4,31]
let arr2 = [4,6,30]

const mergeSortedArrays = (arr1,arr2) => {
    // define variables we need 
    const mergedArray = [];
    
    let array1Item = arr1[0];
    let array2Item = arr2[0];

    // check input - what if the array is empty? => return first array
    if (arr1.length === 0 ){
        return arr2
    } else if (arr2.length === 0){
        return arr1
    }

    let i = 1
    let j = 1
    while (array1Item || array2Item){
        if (!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = arr1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j]
            j++
        }

    }


    return mergedArray;
}

console.log(mergeSortedArrays(arr1,arr2))