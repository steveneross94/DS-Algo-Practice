// max depth parentheses
let s = "(1+(2*3)+((8)/4))+1"

// hash map
const maxDepth = s => {
    let maxCount = 0
    let count = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] === '('){
            count++
            maxCount = Math.max(maxCount, count)
            console.log('count',count)
            console.log('max count',maxCount)
            console.log(Math.max(maxCount, count))
        } else if (s[i] === ')'){
            count--
        }
    }
    return maxCount
}

console.log(maxDepth(s))