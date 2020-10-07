// let nums = [8,1,2,2,3]
// let smallerNumbersThanCurrent = function(nums) {
//     // loop through the array
//     // for the nums[i], loop again (nums[j]) and return nums smaller than nums[i]
//     // store length of nums[j] as answer
//     console.log(nums)
//     let sorted = nums.slice().sort((a,b) => a - b)
//     console.log(sorted)
//     let answer = []
//     for (let i = 0; i < nums.length; i++){
//         console.log(sorted.indexOf(nums[i]))
//         answer.push(sorted.indexOf(nums[i]))
//     }
//     return answer
// };

// console.log(smallerNumbersThanCurrent(nums))

let nums = [1,2,3,1,1,3]

const numIdenticalPairs = nums => {
    //create empty hash to hold each element as we iterate through it
    let numHash = {}
    
    //create a variable to keep count of good pairs
    let good = 0
    
    //iterate over array
    for (i = 0; i < nums.length; i++){
        
        let num = nums[i]
        
        //checking if the number exists in the hash already
        //if it does, it means we have already iterated over the number at least once
        if (!!numHash[num]) { // numHash[1]
            //if the number exists in the hash, we take the value corresponding to that element key and 
            //add it to the good count
            // so if a number has only come up once so far, then the current count will be 1
            good += numHash[num] //numHash[num] === 3; good+= 3 
            //
            console.log("current", numHash[num])
            numHash[num]++
            console.log("new", numHash[num])
            
            //numHash[1] +=1; === 3
        } else {
            //numHash[1] = 1
            numHash[num] = 1
        }
        console.log(good)
    }
    return good
    console.log(numHash)
}

console.log("result", numIdenticalPairs(nums))