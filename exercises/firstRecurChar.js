let array1 = [2,5,5,1,2,3,5,1,2,4,4]

const firstRepChar = arr => {
    let result = {}
    for (let i = 0; i < arr.length; i++){
        console.log(result);
        if (!result[arr[i]]){
           result[arr[i]] = 1
        } else {
            return arr[i]
        }
    }
    return undefined
}

console.log(firstRepChar(array1));