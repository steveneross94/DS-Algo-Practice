let nums = [8,1,2,2,3]
let smallerNumbersThanCurrent = function(nums) {
    // loop through the array
    // for the nums[i], loop again (nums[j]) and return nums smaller than nums[i]
    // store length of nums[j] as answer
    console.log(nums)
    let sorted = nums.slice().sort((a,b) => a - b)
    console.log(sorted)
    let answer = []
    for (let i = 0; i < nums.length; i++){
        console.log(sorted.indexOf(nums[i]))
        answer.push(sorted.indexOf(nums[i]))
    }
    return answer
};

console.log(smallerNumbersThanCurrent(nums))