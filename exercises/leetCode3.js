// sum of all odd length subarrays

let arr = [1,4,2,5,3]

/*

*/

const sumOddLengthSubArrays = arr => {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        let subArr = []
        let subCount = 0
        for (let j = i; j < arr.length; j++){
            subArr.push(arr[j])
            subCount += arr[j]
            console.log(subCount)
            if (subArr.length % 2 !== 0){
                count += subCount
                console.log(count)
            }
        }
        
    }
    return count 
}

console.log(sumOddLengthSubArrays(arr))