let str = "Hello"
let toLowerCase = str => {
    let returnStr = ""
    for (let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            returnStr = returnStr.concat(String.fromCharCode(str.charCodeAt(i) + 32))
        } else {
            returnStr = returnStr.concat(str[i])
        }
    }
    return returnStr
} 

console.log(toLowerCase(str))