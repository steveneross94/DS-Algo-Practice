
nums = [1, 2, 3, 4]

const decompressRLElist = nums => {
    // iterate through
    // find adjacent pair
    // each pair corresponds to frequency and value
    // generate new array with length of frequency and each item === value
    let result = [];

    if (nums.length % 2 === 1){
        return nums
    }
    
    const pairsNum = nums.length / 2

    for (let i = 0; i < pairsNum; i ++) {
        const freq = nums[2*i]
        const val = nums[2 * i + 1]
        console.log(freq, val)
        const newArray = new Array(freq).fill(val)

        result = result.concat(newArray)
    }
    return result
}

console.log(decompressRLElist(nums))