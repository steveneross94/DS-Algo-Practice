/**
 * @param {number} n
 * @return {number}
 */

let n = 234
var subtractProductAndSum = function(n) {
    let result = 0
    let sum = 0
    let product = 1
    let number = n.toString().split("")


    for (let i = 0; i < number.length; i++){
        
        sum += Number(number[i])
        product *= Number(number[i])        

    }

    result = product - sum


};

subtractProductAndSum(n)
// output = 15 