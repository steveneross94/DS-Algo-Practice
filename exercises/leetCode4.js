// find numbers with even number of digits

// given an array nums of integers, return how many of them
// contain an even number of digits

let nums = [12, 345, 2, 6, 7896]

let findNumbers = nums => {
    return nums.filter(x => x.toString().length % 2 == 0).length;
}

console.log(findNumbers(nums))