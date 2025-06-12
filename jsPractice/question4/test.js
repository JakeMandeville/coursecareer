function deliminate(str,delim,spacing) {
    let pointer = spacing
    let newStr =str
    while (pointer < newStr.length) {
        newStr = newStr.slice(0,pointer) + delim + newStr.slice(pointer)
        pointer += spacing+1;
        continue
    }
    return newStr
}

console.log(deliminate("IamCogregeragregol","-",2));