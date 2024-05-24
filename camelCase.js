function camelCase(str) {
    let newStr = str.split(" ")
    let camelCase = ""
    camelCase += newStr[0].toLowerCase() 
    for (let i = 1; i < newStr.length; i++) {
       camelCase += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1) 
    }
    return camelCase
}
console.log(camelCase("")); 