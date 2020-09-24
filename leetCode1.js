/**
 * param {string} s
 * param {number[]} indices
 * return {string}
 */


let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];



// loop over s and assign indices values to s
const restoreString = function(s, indices) {
    let resultString = []; // length = s.length
    

    for (let i = 0; i < s.length; i++){
        
        resultString[indices[i]] = s[i];
        console.log(resultString) // THIS MAKES SO MUCH SENSE NOW LETS GO
    }

    return resultString.join("")
    
};

console.log(restoreString(s, indices))

// /**
//  * @param {string} address
//  * @return {string}
//  */

// let address = "1.1.1.1"

// var defangIPaddr = function(address) {
//     let newAddress = [];

//     for (let i = 0; i < address.length; i++){
//         // loop over address
//         // anywhere there is a "." replace with "[.]"

//         if(address[i] === "."){
//             newAddress.push("[.]")
//         } else {
//             newAddress.push(address[i])
//         }
        
//     }
    
//     return newAddress.join("")
//     // return address.split(".").join('[.]');
// };

// // [
// //     '1', '[.]',
// //     '1', '[.]',
// //     '1', '[.]',
// //     '1'
// //   ]

// console.log(defangIPaddr(address))


